package swiftbird.us.miroplug.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import swiftbird.us.miroplug.service.MiroPlugService;

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

    @GetMapping(value = "/snapwidgets/snapforms/")
    @ResponseBody
    public String getSnapDocs() {
        return service.getSnapFormTemplate();

    }

    @GetMapping(value = "/snapwidgets/snaptemplates/")
    @ResponseBody
    public String getSnapTemplate() {
        return service.getSnapTemplate();

    }

    @GetMapping(value = "/snapwidgets/snapdirections/")
    @ResponseBody
    public String getSnapDirections() {
        return service.getSnapDirections();

    }


    @GetMapping(value = "/snapwidgets/eventstorms/")
    @ResponseBody
    public String getEventStormTemplate() {
        return service.getEventStormTemplate();

    }

    @PostMapping(value = "/snapwidgets/dump/")
    @ResponseBody
    public String dumpJson(@RequestBody String json) {
        System.out.println(json);
        return(json);
//        return service.dump(json);

    }
}
