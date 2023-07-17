package swiftbird.us.miroplug;

import java.io.*;
import java.nio.file.Files;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.core.io.ClassPathResource;

public class Sandbox {

    public static void main(String[] args) {

        System.out.println("Running it to see what happens");
        JSONObject jo = new JSONObject();
        jo.put("firstName", "John");
        jo.put("lastName", "Smith");
        jo.put("age", 25);

        // for address data, first create LinkedHashMap
        Map m = new LinkedHashMap(4);
        m.put("streetAddress", "21 2nd Street");
        m.put("city", "New York");
        m.put("state", "NY");
        m.put("postalCode", 10021);

        // putting address to JSONObject
        jo.put("address", m);

        // for phone numbers, first create JSONArray
        JSONArray ja = new JSONArray();

        m = new LinkedHashMap(2);
        m.put("type", "home");
        m.put("number", "212 555-1234");

        // adding map to list
        ja.add(m);

        m = new LinkedHashMap(2);
        m.put("type", "fax");
        m.put("number", "212 555-1234");

        // adding map to list
        ja.add(m);

        // putting phoneNumbers to JSONObject
        jo.put("phoneNumbers", ja);
        System.out.println(jo.toJSONString());

        try {
            Sandbox.loadJSON();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public static void loadJSON() throws Exception {
        // parsing file "JSONExample.json"

        ClassPathResource resource = new ClassPathResource("templates/nodes.json");
        File file = resource.getFile();

        Object obj = new JSONParser().parse(new FileReader(file));

        // typecasting obj to JSONObject
        JSONObject jo = (JSONObject) obj;
        System.out.println(jo.toJSONString());

//        // getting firstName and lastName
//        String firstName = (String) jo.get("firstName");
//        String lastName = (String) jo.get("lastName");
//
//        System.out.println(firstName);
//        System.out.println(lastName);
//
//        // getting age
//        long age = (long) jo.get("age");
//        System.out.println(age);
//
        // getting address
        System.out.println("EDGES: " + jo.get("edges").getClass().getName());
        JSONArray edges = ((JSONArray) jo.get("edges"));
        for (int i = 0; i < edges.size(); i++) {
            System.out.println("The " + i + " element of the array: " + edges.get(i));
        }

        Iterator i = edges.iterator();
        while (i.hasNext()) {
            JSONObject edge = (JSONObject) i.next();
            System.out.println("edgeId: " + edge.get("edgeId"));
        }
        // iterating address Map
//        Iterator itr2 = address.iterator();
//        while (itr2.hasNext()) {
//            System.out.println(itr2.toJSONString());
//        }
//
//        // getting phoneNumbers
//        JSONArray ja = (JSONArray) jo.get("phoneNumbers");
//
//        // iterating phoneNumbers
//        Iterator itr2 = ja.iterator();
//
//        while (itr2.hasNext()) {
//            itr1 = ((Map) itr2.next()).entrySet().iterator();
//            while (itr1.hasNext()) {
//                Map.Entry pair = itr1.next();
//                System.out.println(pair.getKey() + " : " + pair.getValue());
//            }
//        }
    }
}


