library(shiny)

shinyUI(
  fluidPage(
    
    tags$head(includeScript("google-analytics.js")),
    
        h3("Course Workload Estimator", align="center"),
    hr(),
    fluidRow(
      column(3,
       h4("READING ASSIGNMENTS"),
        wellPanel(
          numericInput(
            inputId = "weeklypages",
            label = "Pages Per Week:",
            value=0,
            width='100%'
          ),
          hr(),
          selectInput(inputId="readingdensity", label="Page Density:",c("450 Words (Paperback)"=1, "600 Words (Monograph)"=2,"750 Words (Textbook)"=3), selected=1),
          selectInput(inputId="difficulty", label="Difficulty:",c("No New Concepts"=1,"Some New Concepts"=2,"Many New Concepts"=3), selected=1),
          selectInput(inputId="readingpurpose", label="Purpose:",c("Survey"=1,"Understand"=2,"Engage"=3), selected=1),
          p(strong("Estimated Reading Rate:"),br(),textOutput("pagesperhour.out", inline=T),br(),br(),checkboxInput("setreadingrate", "manually adjust", value=F, width='100%'), align="center"),
          conditionalPanel("input.setreadingrate == true",
              numericInput(inputId="overridepagesperhour", label="Pages Read Per Hour:", value=10, min=0, max=NA)
          )
        )
      ),  
      column(3,
       h4("WRITING ASSIGNMENTS"),
        wellPanel(
          numericInput(
            inputId = "semesterpages",
            label = "Pages Per Semester:",
            value=0,
            width='100%'
          ),
          hr(),
          selectInput(inputId="writtendensity", label="Page Density:",c("250 Words (D-Spaced)"=1, "500 Words (S-Spaced)"=2), selected=1),
          selectInput(inputId="writingpurpose", label="Genre:",c("Reflection; Narrative"=1, "Argument"=2, "Research"=3), selected=1),
          selectInput(inputId="draftrevise", label="Drafting:",c("No Drafting"=1, "Minimal Drafting"=2, "Extensive Drafting"=3), selected=1),
          p(strong("Estimated Writing Rate:"),br(),textOutput("hoursperwriting.out", inline=T), br(),br(),checkboxInput("setwritingrate", "manually adjust", value=F, width='100%'), align="center"),
          conditionalPanel("input.setwritingrate == true",
              numericInput(inputId="overridehoursperwriting", label="Hours Per Written Page:", value=.5, min=0.1, max=NA)
          )
                  )
      ),  
      column(3,
       h4("EXAMS"),
      wellPanel(  
        numericInput(
            inputId = "exams",
            label = "Exams Per Semester:",
            value=0,
            width='100%'
          ),
        sliderInput(
          inputId = "examhours",
          label = "Study Hours Per Exam:",
          min=0,
          max=50,
          step=1,
          value=0,
          width='100%'
        )
      ),
      h4("OTHER ASSIGNMENTS"),
      wellPanel(  
        numericInput(
            inputId = "otherassign",
            label = "Assignments Per Semester:",
            value=0,
            width='100%'
          ),
        sliderInput(
          inputId = "otherhours",
          label = "Hours Per Assignment:",
          min=0,
          max=50,
          step=1,
          value=0,
          width='100%'
        )
      )
      ),
      column(3,
             h4("COURSE INFO"),
             wellPanel(
               numericInput(
                 inputId = "classweeks",
                 label = "Class Weeks (With Exams):",
                 value=15,
                 width='100%'
               )
             ),
             hr(),
             h4("ESTIMATED WORKLOAD", align="center"),
             wellPanel(
               strong(textOutput("estimatedworkload"), align="center")
             ),
             p(a("Estimation Details", href="http://www.cte.rice.edu/workload#howcalculated", target="blank"), align="center"), 
             hr(),
             p(strong("Research & Design"), br(), a("Elizabeth Barre", href="http://www.elizabethbarre.com", target="blank"), br(), a("Justin Esarey", href="http://www.justinesarey.com", target="blank"), br(), align="center")
      )
    )
  )
)

