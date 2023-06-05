package step_defs;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FirstStepdef {
    @Given("^User JohnDoe with password abc(\\d+) is registered$")
    public void user_JohnDoe_with_password_abc_is_registered(int arg1)  {


    }

    @When("^User JohnDoe with password abc(\\d+) logs in$")
    public void user_JohnDoe_with_password_abc_logs_in(int arg1)  {


    }

    @Then("^User JohnDoe should be navigated to HomePage$")
    public void user_JohnDoe_should_be_navigated_to_HomePage()  {


    }

    @When("^User JohnDoe with password wrongPass logs in$")
    public void user_JohnDoe_with_password_wrongPass_logs_in() {


    }

    @Then("^User should be given login error message$")
    public void user_should_be_given_login_error_message()  {


    }

    @Given("^User tim@apple\\.com with password timceo is registered$")
    public void user_tim_apple_com_with_password_timceo_is_registered()  {


    }

    @When("^User tim@apple\\.com with password timceo logs in$")
    public void user_tim_apple_com_with_password_timceo_logs_in() {

    }

    @Then("^User tim@apple\\.com should be navigated to Homepage$")
    public void user_tim_apple_com_should_be_navigated_to_Homepage() {

    }


}
