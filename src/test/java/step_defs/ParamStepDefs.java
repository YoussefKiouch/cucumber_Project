package step_defs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ParamStepDefs {
    @Given("^User \"([^\"]*)\" with password \"([^\"]*)\" is registered$")
    public void user_with_password_is_registered(String arg1, String arg2)  {

    }

    @When("^User \"([^\"]*)\" with password \"([^\"]*)\" logs in$")
    public void user_with_password_logs_in(String arg1, String arg2)  {

    }

    @Then("^User \"([^\"]*)\" should be navigated to Homepage$")
    public void user_should_be_navigated_to_Homepage(String arg1) {


    }

    @Then("^User  \"([^\"]*)\" should be navigated to HomePage$")
    public void userShouldBeNavigatedToHomePage(String arg0)  {

    }

    @And("^User Buys (\\d+) \"([^\"]*)\"$")
    public void userBuys(int arg0, String arg1)  {

    }

    @Then("^User total should be \\$(\\d+)\\.(\\d+)$")
    public void userTotalShouldBe$(int arg0, int arg1) {

    }

    @And("^User credit standing should be 'A'$")
    public void userCreditStandingShouldBeA() {

    }

    @Then("^User should have (\\d+) \"([^\"]*)\"$")
    public void userShouldHave(int arg0, String arg1) {

    }
}
