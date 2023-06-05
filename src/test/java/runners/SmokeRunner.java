package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;


// we are using RunWith annotation to annotate(let the jvm know that this class
//will be a junit test runner class.
@RunWith(Cucumber.class)
@CucumberOptions(
        //classpath is a root path of the project compiled code.
        features = {"classpath:features"},
        //where to look for step defs
        glue = {"step_defs"},
        //tags are same thing as groups in TestNg(test filters)
        //tilde ~ means do not include this tag
        tags = {"@smoke"},
        //is responsible for generating junit reports in json format ->json File

        plugin = {"json:target/cucumberProject.json"},

       format = {"pretty", "html:target/reports"},
        dryRun = true
)
public class SmokeRunner {
    @BeforeClass // run only once before anything
    public static void oneTimeSetup() {

        System.out.println();
    }

    @AfterClass // last thing to run before we are done with the smoke test
    //run only once
    public static void oneTimeTearUp() {

    }
}
