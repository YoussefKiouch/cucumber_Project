package step_defs;

import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AppleStoreSteps {

  @Before
  public void appleStoreSetup(){
      System.out.println("Setup some tests");
  }

    @Given("^Apple Store has (\\d+) \"([^\"]*)\"$")
    public void appleStoreHas(int amount, String item)  {
        System.out.println("Loading" +amount + item +"s");

    }



    @And("^Apple Store should have <amount> \"([^\"]*)\"$")
    public void appleStoreShouldHave(int amount, String item) {
        System.out.println("Current Apple Store Stock has "+amount +item+"s");

    }


    @When("^User buys <buyAmount> \"([^\"]*)\"$")
    public void userBuysBuyAmount(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Given("^Apple store has <amount> \"([^\"]*)\"$")
    public void appleStoreHasAmount(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }


    @And("^Apple Store should have <currentAppleStoreAmount> \"([^\"]*)\"$")
    public void appleStoreShouldHaveCurrentAppleStoreAmount(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}