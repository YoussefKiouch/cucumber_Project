###Maven###

What is maven?
dependency -> your project dependencies -> cucumber, junit , sql , api and many other libraries.
Maven is a Java project and dependency(Library) management tool that has been designed to write Java applications and compile and deploy artifacts like jar , war is an easy fashion.
Maven originally has been designed for developers .As automation engineers we take advantage of it as well .
Maven automated many processes and most configurations happen in pom.xml
so pom.xml is a center of the whole maven project flow.
1.adding new libraries (dependecies)


### Cucumber ###
Cucumber is a tool that supports behavior driven development (BDD).it offers a way to write tests that anybody can understand ,regardless of their technical knowledge.

what is the problem with reading tests requiring technical knowledge?
 you have to explain po the exact test scenario in a written form .

### Feature ###
is one file contains tests for one functionality.for every functionality  you create one feature file.
Every feature file should start with a feature :keyword
### Scenario ###
one scenario is one test .scenarios -Test scenarios.

### Steps ###
Given -> should be used for pre requisite(setup) test steps.
When -> should be used for action steps of actual functionality of the test.
Then -> should be used for validation (assertion) of the result
and -> when you have multiple pre requisite or action steps . you dont want to have 

### Step definitions (Glue code)
Cucumber masks the technical testing steps with the help of gherkin language . in order for us to map those gherkin steps to a java code cucumber uses step definitions .
step definition is a java glue code which maps to a corresponding feature file step.