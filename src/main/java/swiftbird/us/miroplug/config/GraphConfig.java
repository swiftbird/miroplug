package swiftbird.us.miroplug.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@ConfigurationProperties(prefix = "graph")
@Configuration
public class GraphConfig {
    private String neoUri;
    private String user;
    private String password;

    public String getNeoUri() {
        return neoUri;
    }

    public void setNeoUri(String neoUri) {
        this.neoUri = neoUri;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}

