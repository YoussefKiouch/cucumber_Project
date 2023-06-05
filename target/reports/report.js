$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Background.feature");
formatter.feature({
  "line": 1,
  "name": "Avoiding Repetition",
  "description": "",
  "id": "avoiding-repetition",
  "keyword": "Feature"
});
formatter.before({
  "duration": 184799,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User  \"johnDoe@gmail.com\" should be navigated to HomePage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_is_registered(String,String)"
});
formatter.result({
  "duration": 185697200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_logs_in(String,String)"
});
formatter.result({
  "duration": 103800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 7
    }
  ],
  "location": "ParamStepDefs.userShouldBeNavigatedToHomePage(String)"
});
formatter.result({
  "duration": 169100,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Integer Params -Buy functionality",
  "description": "",
  "id": "avoiding-repetition;integer-params--buy-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User Buys 20 \"Iphones\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should have 20 \"Iphones\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 10
    },
    {
      "val": "Iphones",
      "offset": 14
    }
  ],
  "location": "ParamStepDefs.userBuys(int,String)"
});
formatter.result({
  "duration": 1282400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 17
    },
    {
      "val": "Iphones",
      "offset": 21
    }
  ],
  "location": "ParamStepDefs.userShouldHave(int,String)"
});
formatter.result({
  "duration": 264201,
  "status": "passed"
});
formatter.uri("features/BackgroundAndOutline.feature");
formatter.feature({
  "line": 1,
  "name": "Combine Outline and Background",
  "description": "",
  "id": "combine-outline-and-background",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Apple Store Buy",
  "description": "",
  "id": "combine-outline-and-background;apple-store-buy",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Apple store has \u003camount\u003e \"\u003citem\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User buys \u003cbuyAmount\u003e \"\u003citem\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should have \u003cbuyAmount\u003e \"\u003citem\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Apple Store should have \u003ccurrentAppleStoreAmount\u003e \"\u003citem\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "combine-outline-and-background;apple-store-buy;",
  "rows": [
    {
      "cells": [
        "amount",
        "item",
        "buyAmount",
        "currentAppleStoreAmount"
      ],
      "line": 14,
      "id": "combine-outline-and-background;apple-store-buy;;1"
    },
    {
      "cells": [
        "100",
        "Iphone",
        "10",
        "90"
      ],
      "line": 15,
      "id": "combine-outline-and-background;apple-store-buy;;2"
    },
    {
      "cells": [
        "50",
        "Ipad",
        "5",
        "45"
      ],
      "line": 16,
      "id": "combine-outline-and-background;apple-store-buy;;3"
    },
    {
      "cells": [
        "80",
        "Watches",
        "10",
        "70"
      ],
      "line": 17,
      "id": "combine-outline-and-background;apple-store-buy;;4"
    },
    {
      "cells": [
        "11",
        "Mac",
        "10",
        "1"
      ],
      "line": 18,
      "id": "combine-outline-and-background;apple-store-buy;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 114401,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User  \"johnDoe@gmail.com\" should be navigated to HomePage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_is_registered(String,String)"
});
formatter.result({
  "duration": 120700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_logs_in(String,String)"
});
formatter.result({
  "duration": 95900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 7
    }
  ],
  "location": "ParamStepDefs.userShouldBeNavigatedToHomePage(String)"
});
formatter.result({
  "duration": 113900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Apple Store Buy",
  "description": "",
  "id": "combine-outline-and-background;apple-store-buy;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Apple store has 100 \"Iphone\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User buys 10 \"Iphone\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should have 10 \"Iphone\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Apple Store should have 90 \"Iphone\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 17
    },
    {
      "val": "Iphone",
      "offset": 21
    }
  ],
  "location": "ParamStepDefs.userShouldHave(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 76301,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User  \"johnDoe@gmail.com\" should be navigated to HomePage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_is_registered(String,String)"
});
formatter.result({
  "duration": 160099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_logs_in(String,String)"
});
formatter.result({
  "duration": 198201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 7
    }
  ],
  "location": "ParamStepDefs.userShouldBeNavigatedToHomePage(String)"
});
formatter.result({
  "duration": 97700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Apple Store Buy",
  "description": "",
  "id": "combine-outline-and-background;apple-store-buy;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Apple store has 50 \"Ipad\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User buys 5 \"Ipad\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should have 5 \"Ipad\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Apple Store should have 45 \"Ipad\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 17
    },
    {
      "val": "Ipad",
      "offset": 20
    }
  ],
  "location": "ParamStepDefs.userShouldHave(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 54401,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User  \"johnDoe@gmail.com\" should be navigated to HomePage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_is_registered(String,String)"
});
formatter.result({
  "duration": 124200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_logs_in(String,String)"
});
formatter.result({
  "duration": 110300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 7
    }
  ],
  "location": "ParamStepDefs.userShouldBeNavigatedToHomePage(String)"
});
formatter.result({
  "duration": 95099,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Apple Store Buy",
  "description": "",
  "id": "combine-outline-and-background;apple-store-buy;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Apple store has 80 \"Watches\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User buys 10 \"Watches\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should have 10 \"Watches\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Apple Store should have 70 \"Watches\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 17
    },
    {
      "val": "Watches",
      "offset": 21
    }
  ],
  "location": "ParamStepDefs.userShouldHave(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 70800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User  \"johnDoe@gmail.com\" should be navigated to HomePage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_is_registered(String,String)"
});
formatter.result({
  "duration": 151900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_logs_in(String,String)"
});
formatter.result({
  "duration": 108599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 7
    }
  ],
  "location": "ParamStepDefs.userShouldBeNavigatedToHomePage(String)"
});
formatter.result({
  "duration": 88600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Apple Store Buy",
  "description": "",
  "id": "combine-outline-and-background;apple-store-buy;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Apple store has 11 \"Mac\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User buys 10 \"Mac\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should have 10 \"Mac\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Apple Store should have 1 \"Mac\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 17
    },
    {
      "val": "Mac",
      "offset": 21
    }
  ],
  "location": "ParamStepDefs.userShouldHave(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 76000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User  \"johnDoe@gmail.com\" should be navigated to HomePage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_is_registered(String,String)"
});
formatter.result({
  "duration": 150200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_logs_in(String,String)"
});
formatter.result({
  "duration": 123899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 7
    }
  ],
  "location": "ParamStepDefs.userShouldBeNavigatedToHomePage(String)"
});
formatter.result({
  "duration": 109900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Integer Params -Buy functionality",
  "description": "",
  "id": "combine-outline-and-background;integer-params--buy-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User Buys 20 \"Iphones\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User should have 20 \"Iphones\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 10
    },
    {
      "val": "Iphones",
      "offset": 14
    }
  ],
  "location": "ParamStepDefs.userBuys(int,String)"
});
formatter.result({
  "duration": 155700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 17
    },
    {
      "val": "Iphones",
      "offset": 21
    }
  ],
  "location": "ParamStepDefs.userShouldHave(int,String)"
});
formatter.result({
  "duration": 128399,
  "status": "passed"
});
formatter.uri("features/Datatables/DataTables.feature");
formatter.feature({
  "line": 1,
  "name": "Test with data Table",
  "description": "",
  "id": "test-with-data-table",
  "keyword": "Feature"
});
formatter.before({
  "duration": 56700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Data table  -Great",
  "description": "",
  "id": "test-with-data-table;data-table---great",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "the following invoices are created",
  "rows": [
    {
      "cells": [
        "amount",
        "name"
      ],
      "line": 18
    },
    {
      "cells": [
        "200",
        "spoon"
      ],
      "line": 19
    },
    {
      "cells": [
        "222",
        "Iphone"
      ],
      "line": 20
    },
    {
      "cells": [
        "100",
        "Ipad"
      ],
      "line": 21
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user sends the above invoices",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user should have 522 in total invoices report",
  "keyword": "Then "
});
formatter.match({
  "location": "ReportStep.theFollowingInvoicesAreCreated(DataTable)"
});
formatter.result({
  "duration": 4882900,
  "status": "passed"
});
formatter.match({
  "location": "ReportStep.user_sends_the_above_invoices()"
});
formatter.result({
  "duration": 1342700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("features/ParamScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "Login Scenarios Parameterized",
  "description": "",
  "id": "login-scenarios-parameterized",
  "keyword": "Feature"
});
formatter.before({
  "duration": 71399,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login With Params",
  "description": "",
  "id": "login-scenarios-parameterized;login-with-params",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User \"tim@apple.com\" with password \"timceo\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User \"tim@apple.com\" with password \"timceo\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User \"tim@apple.com\" should be navigated to Homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tim@apple.com",
      "offset": 6
    },
    {
      "val": "timceo",
      "offset": 36
    }
  ],
  "location": "ParamStepDefs.user_with_password_is_registered(String,String)"
});
formatter.result({
  "duration": 208400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tim@apple.com",
      "offset": 6
    },
    {
      "val": "timceo",
      "offset": 36
    }
  ],
  "location": "ParamStepDefs.user_with_password_logs_in(String,String)"
});
formatter.result({
  "duration": 261600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tim@apple.com",
      "offset": 6
    }
  ],
  "location": "ParamStepDefs.user_should_be_navigated_to_Homepage(String)"
});
formatter.result({
  "duration": 92600,
  "status": "passed"
});
});