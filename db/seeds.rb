Question.create!([
  {order_id: 1, question_title: "I work at...", sidebar_question_title: "Company", answers: {
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
                        "answer_text" => "None of the above",
                        "css" => "Small",
                        "error" => "This project currently only supports a small set of companies. Please check back in the future for updates."
                      }
                    }
                  },
  {order_id: 2, question_title: "I am a...", sidebar_question_title: "Role Type", answers: {
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
  {order_id: 3, question_title: "My title is...", sidebar_question_title: "Title", answers: {
                      1 => {
                        "answer_type" => "titletextbox",
                        "default_text" => "e.g. Software Engineer"
                      }
                    }
                  },
  {order_id: 4, question_title: "My base annual salary (USD) is...", sidebar_question_title: "Base Salary", answers: {
                      1 => {
                        "answer_type" => "moneytextbox",
                        "default_text" => "e.g. 100,000"
                      }
                    }
                  },
  {order_id: 5, question_title: "My level is...", sidebar_question_title: "Level", answers: {
                      1 => {
                        "answer_type" => "numerictextbox",
                        "default_text" => "e.g. 4"
                      },
                      2 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Not applicable",
                        "css" => "small"
                      }
                    }
                  },
  {order_id: 6, question_title: "I identify as a...", sidebar_question_title: "Gender", answers: {
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
                      },
                      4 => {
                        "answer_type" => "Radio",
                        "answer_text" => "Fuck your gender bullshit"
                      }
                    }
                  }
])
