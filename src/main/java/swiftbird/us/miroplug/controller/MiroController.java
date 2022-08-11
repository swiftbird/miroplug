package swiftbird.us.miroplug.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import swiftbird.us.miroplug.service.MiroPlugService;

import javax.annotation.Resource;

@RequestMapping(value ="/")
@RestController
public class MiroController {

    @Autowired
    MiroPlugService service;

    @GetMapping(value = "/graphs")
    @ResponseBody
    public String getAll() {
        return "You did it";

    }

    @GetMapping(value = "/swiftwidgets")
    @ResponseBody
    public String getWidget(@RequestParam String element) {
        return service.loadJson(element);
    }

    @GetMapping(value = "/swiftwidgets/snapforms/")
    @ResponseBody
    public String getSnapDocs() {
        return service.getSnapFormTemplate();

    }

    @GetMapping(value = "/swiftwidgets/snaptemplates/")
    @ResponseBody
    public String getSnapTemplate() {
        return service.getSnapTemplate();

    }

    @GetMapping(value = "/swiftwidgets/snapdirections/")
    @ResponseBody
    public String getSnapDirections() {
        return service.getSnapDirections();

    }


    @GetMapping(value = "/swiftwidgets/eventstorms/")
    @ResponseBody
    public String getEventStormTemplate() {
        return service.getEventStormTemplate();

    }

    @PostMapping(value = "/swiftwidgets/dump/")
    @ResponseBody
    public String dumpJson(@RequestBody String json) {
        System.out.println(json);
        return(json);
//        return service.dump(json);

    }
}
