package swiftbird.us.miroplug.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

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
}

