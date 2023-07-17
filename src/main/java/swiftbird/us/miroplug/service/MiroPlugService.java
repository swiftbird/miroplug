package swiftbird.us.miroplug.service;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MiroPlugService {

    @Value("classpath:templates/snapForm.json")
    Resource snapFormTemplate;

    @Value("classpath:templates/snapTemplate.json")
    Resource snapTemplate;

    @Value("classpath:templates/BorisDirections.json")
    Resource borisDirectionsTemplate;

    @Value("classpath:templates/es_template.json")
    Resource esTemplateJson;

    public String getSnapFormTemplate() {
        System.out.println("Loading...." + loadJson("capture"));

//        String result = "Nope";
        String result = loadJson("capture");
//        try {
//            File snapForm = snapFormTemplate.getFile();
//            result = new String(Files.readAllBytes(snapForm.toPath()));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
        System.out.println("Fetched Snap Form Template: " + result);
        return result;
    }

    public String getSnapTemplate() {
        String result = "Nope";
        try {
            File snapForm = snapTemplate.getFile();
            result = new String(Files.readAllBytes(snapForm.toPath()));
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("Fetched Snap Template: " + result);
        return result;

    }

    public String getSnapDirections() {
        String result = "Nope";
        try {
            File snapDirections = borisDirectionsTemplate.getFile();
            result = new String(Files.readAllBytes(snapDirections.toPath()));
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("Fetched Boris Directions: " + result);
        return result;

    }

    public String getEventStormTemplate() {
        String result = "Nope";
        try {
            File esTemplate = esTemplateJson.getFile();
            result = new String(Files.readAllBytes(esTemplate.toPath()));
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("Fetched ES Template: " + result);
        return result;

    }

    public String loadJson(String name) {

        System.out.println("I got it");
        String result = null;
        try {
            ClassPathResource resource = new ClassPathResource("templates/" + name + ".json");
            File file = resource.getFile();
            result = new String(Files.readAllBytes(file.toPath()));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        System.out.println("Here is the money shot: ");
        System.out.println(result);
        return result;
    }

    public JSONObject forceDirect(JSONObject forceGraph) {
        String result = "";
        try {
            Process process = Runtime.getRuntime().exec("python3 /Users/shaunanderson/Development/Swift++/python-modeling/miro/force_directed_layout_cmd.py");

            BufferedWriter writer = new BufferedWriter(
                    new OutputStreamWriter(process.getOutputStream()));
            writer.write(forceGraph.toJSONString());
            writer.close();
            BufferedReader reader = new BufferedReader(new InputStreamReader(
                    process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
                result += line;
            }
            reader.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        JSONObject directedGraph = null;
        try {
            directedGraph = (JSONObject) new JSONParser().parse(result);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
        return directedGraph;
    }

    public JSONObject getLocations(JSONArray widgets) throws ParseException {

        JSONObject directedGraph = null;
        // Create the return structure
        JSONObject forceGraph = new JSONObject();
        JSONArray forceEdges = new JSONArray();
        JSONArray forceNodes = new JSONArray();

        forceGraph.put("edges", forceEdges);
        forceGraph.put("nodes", forceNodes);
        // Iterate through the widgets to create the JSON that the Force Director needs
        Iterator i = widgets.iterator();
        while (i.hasNext()) {
            JSONObject currentWidget = (JSONObject) i.next();
            if (currentWidget.get("type").equals("sticky_note")) {
                // Add the edge to the graph
                JSONObject graphNode = new JSONObject();
                graphNode.put("nodeId", currentWidget.get("id"));
                graphNode.put("name", "");
                graphNode.put("nodeType", currentWidget.get("type"));
                graphNode.put("label", currentWidget.get("content"));
                JSONArray location = new JSONArray();
                location.add(0, currentWidget.get("x"));
                location.add(1, currentWidget.get("y"));
                location.add(2, 0.0);
                graphNode.put("location", location);

                forceNodes.add(graphNode);
            } else if (currentWidget.get("type").equals("connector")) {

                try {
                    JSONObject startItem = (JSONObject) new JSONParser().parse(currentWidget.get("start").toString());
                    JSONObject endItem = (JSONObject) new JSONParser().parse(currentWidget.get("end").toString());
                    String sourceId = (String) startItem.get("item");
                    String targetId = (String) endItem.get("item");
                    // Add the edge to the graph
                    JSONObject graphEdge = new JSONObject();
                    graphEdge.put("edgeId", currentWidget.get("id"));
                    graphEdge.put("source", sourceId);
                    graphEdge.put("target", targetId);
                    graphEdge.put("label", "");

                    forceEdges.add(graphEdge);
                } catch (Exception e) {
                    System.out.println("Couldn't find a start to this connector." + e.getMessage());
                }
            }
        }
        // Iterate through the original widgets to update the locations
        // Send to force Director
        directedGraph = forceDirect(forceGraph);
        // return the updated widgets location
        return directedGraph;
    }

    public void setSnaps(JSONObject currentWidget, JSONArray widgets) {
        // The current Widget should be a connector
        System.out.println("The Connector: " + currentWidget.toJSONString());
        JSONObject source = (JSONObject) currentWidget.get("start");
        JSONObject target = (JSONObject) currentWidget.get("end");


        JSONObject sourceNode = null;
        JSONObject targetNode = null;

        System.out.println("Start snap: " + source.get("item") + " End snap: " + target.get("item"));
        Iterator i = widgets.iterator();
        System.out.println("widgy size: " + widgets.size());
        while (i.hasNext()) {
            // iterating through the widgets looking for the node
            JSONObject currentNode = (JSONObject) i.next();
            System.out.println("Boohya Current Node is " + currentNode.get("id"));
            if (currentNode.get("id").equals(source.get("item"))) {
                System.out.println("booyah, source");
                sourceNode = currentNode;
            } else if (currentNode.get("id").equals(target.get("item"))) {
                System.out.println("booyah, target");
                targetNode = currentNode;
            }
        }

        Double sourceX = (Double) sourceNode.get("x");
        Double sourceY = (Double) sourceNode.get("y");
        Double targetX = (Double) targetNode.get("x");
        Double targetY = (Double) targetNode.get("y");

        System.out.println(("X difference: " + (sourceX - targetX)));
        System.out.println(("y difference: " + (sourceY - targetY)));
        boolean vertical = false;
        if (Math.abs((sourceX - targetX)) < Math.abs((sourceY - targetY))) {
            System.out.println("Vertical");
            vertical = true;
        } else {
            System.out.println("Horizontal");
        }
        source.remove("snapTo");

        source.put("snapTo", "auto");
        target.remove("snapTo");
        target.put("snapTo", "auto");

//        if (!vertical) {
//            if (sourceX > targetX) {
//                source.put("snapTo", "left");
//                target.remove("snapTo");
//                target.put("snapTo", "right");
//
//                // Take the biggest one - the smallest one to determine "X distance"
//            } else {
//                source.put("snapTo", "right");
//                target.remove("snapTo");
//                target.put("snapTo", "left");
//                // Take the biggest one - the smallest one to determine "Y distance"
//            }
//        } else {
//            if (sourceY > targetY) {
//                source.put("snapTo", "top");
//                target.remove("snapTo");
//                target.put("snapTo", "bottom");
//
//                // Take the biggest one - the smallest one to determine "X distance"
//            } else {
//                source.put("snapTo", "bottom");
//                target.remove("snapTo");
//                target.put("snapTo", "top");
//                // Take the biggest one - the smallest one to determine "Y distance"
//            }
//        }

    }

    public String formatGraph(String graph) {
        String result = "";

        // Converting  the graph to a different format that python understands
        System.out.println("The graph looks like this: " + graph);

        try {
            Object obj = new JSONParser().parse(graph);

//            JSONObject jo = (JSONArray) obj;
//            System.out.println("******" + jo.toJSONString());
            JSONArray widgets = (JSONArray) obj;

            // Do the force directing
            System.out.println("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
            JSONObject locations = getLocations(widgets);
            System.out.println(locations.toJSONString());
            System.out.println("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

            JSONArray newWidgets = new JSONArray();
            System.out.println("******" + widgets);
            Iterator i = widgets.iterator();


            while (i.hasNext()) {
                JSONObject currentWidget = (JSONObject) i.next();
                System.out.println(currentWidget.get("type") + " x: " + currentWidget.get("x") + ", y:" + currentWidget.get("y"));
                // Duplcate the stickies
                if (currentWidget.get("type").equals("sticky_note")) {
                    System.out.println("Duplicating a sticky");
                    Double x = (Double) currentWidget.get("x");
                    Double y = (Double) currentWidget.get("y");
                    String id = (String) currentWidget.get("id");
                    System.out.println(x - 1000);
                    currentWidget.put("x", x - 1000);

                    JSONObject nodes = (JSONObject) locations.get("nodes");
                    // If there is a match, update the x and y locations
                    JSONObject locationNode = (JSONObject) nodes.get(currentWidget.get("id"));

                    System.out.println("Updating:" + nodes.get(currentWidget.get("id")));
                    if (locationNode != null) {
                        JSONArray theLocation = (JSONArray) locationNode.get("location");
                        currentWidget.put("x", theLocation.get(0));
                        currentWidget.put("y", theLocation.get(1));
                    }

                    currentWidget.remove("width");
                    currentWidget.remove("parentId");

                    System.out.println(currentWidget);
                    newWidgets.add(currentWidget);


//                    result = currentWidget.toJSONString();
                } else if (currentWidget.get("type").equals("connector")) {
                    System.out.println("I have a connector");
                    System.out.println("Source: " + currentWidget.get("start"));
                    System.out.println("Target: " + currentWidget.get("end"));
                    currentWidget.remove("parentId");
                    // Let's snap to the right side for source and target
                    // Set snaps
                    JSONObject source = (JSONObject) currentWidget.get("start");
                    JSONObject target = (JSONObject) currentWidget.get("end");
// Filter out orphan connectors
                    if ((source == null) || (target == null)) {
                        System.out.println("Ignoring orphan connector");

                    } else {
                        newWidgets.add(currentWidget);
                    }


                }
            }
            Iterator newI = newWidgets.iterator();
            System.out.println("New wigies : " + newWidgets.size());
            while (newI.hasNext()) {
                JSONObject currentWidget = (JSONObject) newI.next();
                if (currentWidget.get("type").equals("connector")) {
                    JSONObject source = (JSONObject) currentWidget.get("start");
                    JSONObject target = (JSONObject) currentWidget.get("end");
                    if ((source == null) || (target == null)) {
                        System.out.println("Ignoring orphan connector");

                    } else {
                        setSnaps(currentWidget, newWidgets);
                    }
                }
            }
            result = newWidgets.toJSONString();
            System.out.println("New Widgets: " + result);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }


}

