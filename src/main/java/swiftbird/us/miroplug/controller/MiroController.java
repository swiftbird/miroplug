package swiftbird.us.miroplug.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping(value ="/")
@RestController
public class MiroController {

    @GetMapping(value = "/graphs")
    @ResponseBody
    public String getAll() {
        return "You did it";

    }

}
