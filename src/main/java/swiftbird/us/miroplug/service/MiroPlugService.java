package swiftbird.us.miroplug.service;

import org.springframework.beans.factory.annotation.Value;
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

    @Value("classpath:templates/EventStorming.json")
    Resource esTemplateJson;

    public String getSnapFormTemplate() {
        String result = "Nope";

        try {
            File snapForm = snapFormTemplate.getFile();
            result = new String(Files.readAllBytes(snapForm.toPath()));
        } catch (IOException e) {
            e.printStackTrace();
        }
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
}

