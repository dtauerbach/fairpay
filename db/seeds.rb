Question.create!([
  {order_id: 1, question_title: "I work at...", sidebar_question_title: "Company", datapoint_field: "workplace", answers: {
                      1 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Facebook"
                      },
                      2 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Google"
                      },
                      3 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Amazon"
                      },
                      4 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Microsoft"
                      },
                      5 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Apple"
                      },
                      6 => {
                        "answer_type" => "Radio",
                        "answer_text" => "None of the above",
                        "css" => "Small",
                        "error" => "This project currently only supports a small set of companies. Please check back in the future for updates."
                      }
                    }
                  },
  {order_id: 2, question_title: "I am a...", sidebar_question_title: "Role Type", datapoint_field: "role_type", answers: {
                      1 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Individual Contributor (non-HR)"
                      },
                      2 => {
                        "answer_type" => "Radio",
                        "answer_text" => "People Manager",
                        "error" => "This project is currently only for individual contributors who do not work in an HR department. It is against our Terms of Use to give false information or pose as an individual contributor and is against the spirit of the project. However, we intend to eventually have a portal for managers and human resources employees as well, so check back soon."
                      },
                      3 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Executive / HR",
                        "error" => "This project is currently only for individual contributors who do not work in an HR department. It is against our Terms of Use to give false information or pose as an individual contributor and is against the spirit of the project. However, we intend to eventually have a portal for managers and human resources employees as well, so check back soon."
                      }
                    }
                  },
  {order_id: 3, question_title: "My title is...", sidebar_question_title: "Title", datapoint_field: "title", answers: {
                      1 => {
                        "answer_type" => "textbox",
                        "default_text" => "e.g. Software Engineer"
                      }
                    }
                  },
  {order_id: 4, question_title: "My base annual salary (USD) is...", sidebar_question_title: "Base Salary", datapoint_field: "base_salary", answers: {
                      1 => {
                        "answer_type" => "moneytextbox",
                        "default_text" => "e.g. 100,000"
                      }
                    }
                  },
  {order_id: 5, question_title: "My level is...", sidebar_question_title: "Level", datapoint_field: "level", answers: {
                      1 => {
                        "answer_type" => "textbox",
                        "default_text" => "e.g. 4"
                      },
                      2 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Not applicable",
                        "css" => "small"
                      }
                    }
                  },
  {order_id: 6, question_title: "I identify as a...", sidebar_question_title: "Gender", datapoint_field: "gender", answers:{
                      1 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Man"
                      },
                      2 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Woman"
                      },
                      3 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Neither a man nor a woman"
                      }
                    }
                  },
  {order_id: 7, question_title: "I identify as a...", sidebar_question_title: "Race/Ethnicity", datapoint_field: "race", answers:{
                      1 => {
                        "answer_type" => "Radio",
                        "answer_text" => "White"
                      },
                      2 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Hispanic or Latino"
                      },
                      3 => {
                        "answer_type" => "Radio",
                        "answer_text" => "American Indian or Alaska Native"
                      },
                      4 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Black or African American"
                      },
                      5 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Asian"
                      },
                      6 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Native Hawaiian or Other Pacific Islander"
                      },
                      7 => {
                        "answer_type" => "Radio",
                        "answer_text" => "None of the above races or ethnicities"
                      }
                    }
                  },
  {order_id: 8, question_title: "I work in the following region...", sidebar_question_title: "Region", datapoint_field: "region", answers:{
                      1 => {
                        "answer_type" => "Radio",
                        "answer_text" => "North America"
                      },
                      2 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Middle East / North Africa"
                      },
                      3 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Western Europe"
                      },
                      4 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Eastern Europe"
                      },
                      5 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Australia, New Zealand or Oceana"
                      },
                      6 => {
                        "answer_type" => "Radio",
                        "answer_text" => "South Asia"
                      },
                      7 => {
                        "answer_type" => "Radio",
                        "answer_text" => "East Asia"
                      },
                      8 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Southeast Asia"
                      },
                      9 => {
                        "answer_type" => "Radio",
                        "answer_text" => "South America"
                      },
                      10 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Africa"
                      }
                    }
                  },
  {order_id: 9, question_title: "The total number of company Restricted Stock Units (RSUs) that I've been granted is...", sidebar_question_title: "RSU", datapoint_field: "total_rsu", answers: {
                      1 => {
                        "answer_type" => "moneytextbox",
                        "default_text" => "e.g. 150"
                      }
                    }
                  }
])
