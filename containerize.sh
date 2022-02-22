mvn clean install
mvn spring-boot:build-image
docker tag miroplug:$1 swiftbird/miroplug:$1
docker push swiftbird/miroplug:$1
# keytool -genkeypair -alias swiftbird -keyalg RSA -keysize 2048 -storetype PKCS12 -keystore swiftbird.p12 -validity 3650
kubectl set image deployment miroplug miroplug=swiftbird/miroplug:$1