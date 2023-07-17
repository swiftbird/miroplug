package swiftbird.us.miroplug.service;

import com.theokanning.openai.completion.CompletionRequest;
import com.theokanning.openai.service.OpenAiService;
import org.springframework.stereotype.Service;

@Service
public class CodeGenService {

//    const configuration = new Configuration({
//        organization: "org-x2chIydunlrpNfpokRKYjwCA",
//                // apiKey: process.env.OPENAI_API_KEY,
//                apiKey: "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",
//    });

    public String genCode(String description) {
        String result = "oink";
        OpenAiService service = new OpenAiService("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");
        CompletionRequest completionRequest = CompletionRequest.builder()
                .prompt("Somebody once told me the world is gonna roll me")
                .model("gpt-3.5-turbo")
                .echo(true)
                .build();
        service.createCompletion(completionRequest).getChoices().forEach(System.out::println);
        return result;
    }
}

