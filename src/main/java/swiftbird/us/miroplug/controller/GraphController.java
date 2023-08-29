package swiftbird.us.miroplug.controller;


import org.neo4j.ogm.model.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import swiftbird.us.miroplug.service.GraphService;

import java.util.List;

@RestController
@RequestMapping(value = "/spaceport")
public class GraphController {
    @Autowired
    GraphService service;

    @GetMapping(value = "/graphs")
    @ResponseBody
    public Result getAll() {
        return service.getAll();

    }

    @PostMapping(value = "/borismodels")
    @ResponseBody
    public String saveBoris(@RequestBody String widget) {

        // This is the key to the reformatting
        System.out.println("Got a widget: " + widget);

        return service.saveBoris(widget, "default");
    }

    @PostMapping(value = "/borismodels/{name}")
    @ResponseBody
    public String saveBorisByName(@PathVariable String name, @RequestBody String widget) {

        // This is the key to the reformatting
        System.out.println("Got a widget: " + widget);
        System.out.println("Got a name: " + name);

        return service.saveBoris(widget, name);
    }
}
