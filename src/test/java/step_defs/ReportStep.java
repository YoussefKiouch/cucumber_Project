package step_defs;

import Functionalitites.Invoice;
import Functionalitites.TaxHive;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class ReportStep {
    private final List<Invoice> invoiceList = new ArrayList<>();
    double result;
    @Given("^user creates the invoice with amount (\\d+.\\d{2}) and name \"([^\"]*)\"$")
    public void user_creates_the_invoice_with_amount_and_name(double amount, String name) {
        Invoice invoice = new Invoice(amount, name);
    }

    @When("^user sends the above invoices$")
    public void user_sends_the_above_invoices() {
        TaxHive tax = new TaxHive();
        result = tax.report(invoiceList);

    }

//    @Then("^user should have (\\d+) in total invoices report$")
//    public void user_should_have_in_total_invoices_report(int expected)  {
//        Assert.assertEquals(expected , result , 0.0);
//
//    }

    @Given("^the following invoices are created$")
    public void theFollowingInvoicesAreCreated(DataTable datatable) {
        List<Map<String, String>> invoices = datatable.asMaps(String.class, String.class);
        System.out.println(invoices);
        for (Map<String, String> invoice : invoices){
            Invoice invoice1 = new Invoice(Double.parseDouble(invoice.get("amount")), invoice.get("name"));
            invoiceList.add(invoice1);
        }
    }
}
