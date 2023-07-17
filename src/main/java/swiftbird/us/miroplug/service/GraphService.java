package swiftbird.us.miroplug.service;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.neo4j.driver.*;
import org.neo4j.ogm.config.Configuration;
import org.neo4j.ogm.model.Result;
import org.neo4j.ogm.session.Session;
import org.neo4j.ogm.session.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import swiftbird.us.miroplug.config.GraphConfig;

import org.springframework.stereotype.Service;

import java.sql.PreparedStatement;
import java.util.Collections;
import java.util.Iterator;
import java.util.Map;

@Service
public class GraphService implements AutoCloseable {

    @Autowired
    private GraphConfig config;
    private Driver driver;

    public Result getAll() {
        System.out.println("uri: " + config.getNeoUri());
//        driver = GraphDatabase.driver(config.getNeoUri(), AuthTokens.basic(config.getUser(), config.getPassword()));


        String query = "MATCH (n)-[r]->(m) RETURN n as source, r as rel, m as target limit 5000 ";

        String uri = "bolt://localhost:7687";
        String user = "inoke";
        String password = "inoke";

        Configuration.Builder builder = new Configuration.Builder();
//            builder.uri("bolt://neo4j:Gand$alf1@localhost:11003");
//        builder.uri("http://neo4j:Inoke@localhost:7474");
//        builder.uri("http://neo4j:Inoke@supersloth:7474");
        builder.uri("http://inoke:inoke@localhost:7474");
        builder.connectionPoolSize(150);
        Configuration configuration = builder
                .build();

        SessionFactory sessionFactory = new SessionFactory(configuration, "swiftbird.us.miroplug");
        Session session = sessionFactory.openSession();
        Result result = session.query(query, Collections.emptyMap());
        result.forEach(node -> {
            System.out.println(node);
        });
//        session.save(sourceFile);
        return result;
    }

    @Override
    public void close() throws Exception {
        driver.close();
    }

    private String createServiceQuery(JSONObject currentWidget) {
        JSONObject style = (JSONObject) currentWidget.get("style");
        String color = (String) style.get("fillColor");
        System.out.println("I have a style: " + style.toJSONString());
        System.out.println(("Color is: " + color));
        String serviceQuery = null;
        switch (color) {
            case "blue":
                serviceQuery = "MERGE (n:Service {name: \"" + currentWidget.get("content") + "\"}) ON CREATE SET n.created = timestamp()";
                currentWidget.put("nodeType", "Service");
                break;
            case "light_blue":
                serviceQuery = "MERGE (n:Service {name: \"" + currentWidget.get("content") + "\"}) ON CREATE SET n.created = timestamp()";
                currentWidget.put("nodeType", "Service");
                break;
            case "red":
                serviceQuery = "MERGE (n:Topic {name: \"" + currentWidget.get("content") + "\"}) ON CREATE SET n.created = timestamp()";
                currentWidget.put("nodeType", "Topic");
                break;
            case "light_green":
                serviceQuery = "MERGE (n:External {name: \"" + currentWidget.get("content") + "\"}) ON CREATE SET n.created = timestamp()";
                currentWidget.put("nodeType", "External");
                break;
            case "green":
                serviceQuery = "MERGE (n:External {name: \"" + currentWidget.get("content") + "\"}) ON CREATE SET n.created = timestamp()";
                currentWidget.put("nodeType", "External");
                break;
            case "orange":
                serviceQuery = "MERGE (n:AntiCorruptionLayer {name: \"" + currentWidget.get("content") + "\"}) ON CREATE SET n.created = timestamp()";
                currentWidget.put("nodeType", "AntiCorruptionLayer");
                break;
            default:
                System.out.println("****** I couldn't find a color: " + color);
        }

        return serviceQuery;
    }

    public String saveBoris(String graph) {
        System.out.println("Saving Boris: ");
        String result = "";
        // Converting  the graph to a different format that python understands
        System.out.println("The graph looks like this: " + graph);

        try {
            Object obj = new JSONParser().parse(graph);
            JSONArray widgets = (JSONArray) obj;
            JSONArray connectors = new JSONArray();
            JSONArray nodes = new JSONArray();
            System.out.println("******" + widgets);
            Iterator i = widgets.iterator();

            while (i.hasNext()) {
                JSONObject currentWidget = (JSONObject) i.next();
                System.out.println(currentWidget.get("type"));
                // Duplcate the stickies
                if (currentWidget.get("type").equals("sticky_note")) {
                    System.out.println("Saving a sticky");
                    nodes.add(currentWidget);
                    String serviceQuery = createServiceQuery(currentWidget);
                    if (serviceQuery != null) {
                        String uri = "bolt://localhost:7687";
                        String user = "inoke";
                        String password = "inoke";

                        Configuration.Builder builder = new Configuration.Builder();

                        builder.uri("http://inoke:inoke@localhost:7474");
                        builder.connectionPoolSize(150);
                        Configuration configuration = builder
                                .build();

                        SessionFactory sessionFactory = new SessionFactory(configuration, "swiftbird.us.miroplug");
                        Session session = sessionFactory.openSession();
                        System.out.println("Going to do this: " + serviceQuery);
                        Result r = session.query(serviceQuery, Collections.emptyMap());
                        r.forEach(node -> {
                            System.out.println(node);
                        });
                    }

                    System.out.println(currentWidget.toJSONString());


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
                        connectors.add(currentWidget);
                    }
                }
            }
            Iterator connectorIterator = connectors.iterator();
            System.out.println("Number of connectors : " + connectors.size());
            while (connectorIterator.hasNext()) {
                JSONObject currentConnector = (JSONObject) connectorIterator.next();
                if (currentConnector.get("type").equals("connector")) {
                    JSONObject source = (JSONObject) currentConnector.get("start");
                    JSONObject target = (JSONObject) currentConnector.get("end");
                    if ((source == null) || (target == null)) {

                        System.out.println("Ignoring orphan connector");

                    } else {
                        // Create the connectors
//                        setSnaps(currentWidget, connectors);
                        System.out.println("Creating a connector: " + currentConnector.toJSONString());
                        createEdges(currentConnector, nodes);

                    }
                }
            }
            result = connectors.toJSONString();
            System.out.println("New Widgets: " + result);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    private String getConnectionType(String source, String target) {
        String type = "API_CALL";
        if (source != null & target != null) {
            if (source.equals("Service") && target.equals("Service")) {
                type = "API_CALL";
            } else if (target.equals("Topic")) {
                type = "PUBLISH";
            } else if (source.equals("Topic")) {
                type = "SUBSCRIBE";
            }
        }
        return type;
    }

    public void createEdges(JSONObject currentConnector, JSONArray nodes) {
        // The current Widget should be a connector
        System.out.println("The Connector: " + currentConnector.toJSONString());
        JSONObject source = (JSONObject) currentConnector.get("start");
        JSONObject target = (JSONObject) currentConnector.get("end");

        JSONObject sourceNode = null;
        JSONObject targetNode = null;
        String sourceName = null;
        String targetName = null;
        String sourceType = null;
        String targetType = null;

        System.out.println("Start snap: " + source.get("item") + " End snap: " + target.get("item"));
        Iterator i = nodes.iterator();
        System.out.println("widgy size: " + nodes.size());
        while (i.hasNext()) {

            // iterating through the widgets looking for the node

            JSONObject currentNode = (JSONObject) i.next();
//            System.out.println("Boohya Current Node is " + currentNode.get("id"));
            if (currentNode.get("id").equals(source.get("item"))) {

                sourceName = (String) currentNode.get("content");
                sourceType = (String) currentNode.get("nodeType");
                System.out.println("booyah, source " + sourceName + ":" + currentNode.get("nodeType"));

            } else if (currentNode.get("id").equals(target.get("item"))) {

                targetName = (String) currentNode.get("content");
                targetType = (String) currentNode.get("nodeType");
                System.out.println("booyah, target " + targetName + ":" + currentNode.get("nodeType"));
            }

        }
        String connectionType = getConnectionType(sourceType, targetType);
        String serviceQuery =
//                "MATCH (a:Service {name: \"" + sourceName + "\"}), (b:Topic {name: \"" + targetName + "\"}) MERGE (a)-[r:DONKEY]->(b)";
                "MATCH (a:" + sourceType + " {name: \"" + sourceName + "\"}), (b:" + targetType + " {name: \"" + targetName + "\"}) MERGE (a)-[r:" + connectionType + "]->(b)";
        System.out.println("I am creating this: " + serviceQuery);

        String uri = "bolt://localhost:7687";
        String user = "inoke";
        String password = "inoke";

        Configuration.Builder builder = new Configuration.Builder();

        builder.uri("http://inoke:inoke@localhost:7474");
        builder.connectionPoolSize(150);
        Configuration configuration = builder
                .build();

        SessionFactory sessionFactory = new SessionFactory(configuration, "swiftbird.us.miroplug");
        Session session = sessionFactory.openSession();
        System.out.println("Going to do this: " + serviceQuery);
        Result r = session.query(serviceQuery, Collections.emptyMap());
        r.forEach(node -> {
            System.out.println(node);
        });

    }
}
