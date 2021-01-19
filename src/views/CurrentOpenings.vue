<template>
  <div class="bg-gray-100">
    <Banner img="img/backgrounds/current-openings.jpg" title="Current Openings" subTitle="" />
    <div class="max-w-7xl mx-auto my-16 grid grid-cols-2 gap-8">
      <v-card class="my-2 p-4" v-for="(job, i) in jobs" :key="i">
        <h3 class="text-xl font-bold text-gray-900 my-2">{{job.title}}</h3>
        <div class="flex flex-row justify-between my-2">
          <span><strong>Job type</strong>: {{job.type}}</span>
          <span><strong>Experience</strong>: {{job.exp}}</span>
          <span><strong><v-icon>mdi-map-marker</v-icon></strong>{{job.location}}</span>
        </div>
        <span class="my-2"><strong>Posted on:</strong> {{job.postedOn}}</span>
        <br/>
        <v-btn color="primary" depressed class="mt-4 normal-case float-right" @click="jobIndex = i;dialog = true">View</v-btn>
      </v-card>
      <v-dialog
        v-model="dialog"
        max-width="900"
      >
        <v-card class="px-8 pt-6">
          <h3 class="text-xl font-bold text-gray-900 my-2 text-primary">{{jobs[jobIndex].title}}</h3>
          <div class="flex flex-row justify-between my-2">
            <span><strong>Job type</strong>: {{jobs[jobIndex].type}}</span>
            <span><strong>Experience</strong>: {{jobs[jobIndex].exp}}</span>
            <span><strong><v-icon>mdi-map-marker</v-icon></strong>{{jobs[jobIndex].location}}</span>
          </div>
          <span class="my-2"><strong>Posted on:</strong> {{jobs[jobIndex].postedOn}}</span>
          <br/>
          <h3 class="text-lg font-semibold text-gray-900 my-2">Job Description:</h3>
          <p class="text-sm">{{jobs[jobIndex].description}}</p>
          <div v-if="jobs[jobIndex].responsibilities.length > 0">
            <h3 class="text-lg font-semibold text-gray-900 my-2">Responsibilities:</h3>
            <ul class="list-disc">
              <li v-for="(res, i) in jobs[jobIndex].responsibilities" :key="i" class="text-sm">{{res}}</li>
            </ul>
          </div>
          <div v-if="jobs[jobIndex].qualifications.length > 0">
            <h3 class="text-lg font-semibold text-gray-900 my-2">Qualifications:</h3>
            <ul class="list-disc">
              <li v-for="(res, i) in jobs[jobIndex].qualifications" :key="i" class="text-sm">{{res}}</li>
            </ul>
          </div>
          <div v-if="jobs[jobIndex].skills.length > 0">
            <h3 class="text-lg font-semibold text-gray-900 my-2">Skills Required:</h3>
            <ul class="list-disc">
              <li v-for="(res, i) in jobs[jobIndex].skills" :key="i" class="text-sm">{{res}}</li>
            </ul>
          </div>
          <div v-if="jobs[jobIndex].profile.length > 0">
            <h3 class="text-lg font-semibold text-gray-900 my-2">Desired candidate profile:</h3>   
            <ul class="list-disc">
              <li v-for="(res, i) in jobs[jobIndex].profile" :key="i" class="text-sm">{{res}}</li>
            </ul> 
          </div>
          <v-card-actions>
            <v-btn
              color="primary darken-1"
              class="normal-case mx-auto my-4"
              @click="dialog = false"
            >
              Apply Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner'
export default {
  name: 'ManagedDataops',
  components: {
    Banner,
  },
  data () {
    return {
      dialog: false,
      jobIndex: 0,
      jobs: [
        {
          title: 'Product Manager',
          type: 'Full Time',
          exp: '5+ years',
          location: 'Hyderabad',
          postedOn: 'October 28, 2020',
          description: 'You will work collaboratively with directors, usability experts to understand the domain, strategize content, and develop messaging for our solutions and product. As an organization, Modak values integrity and initiative.This is a client facing role; hence client facing / consulting experience will be given preference. You will work in an environment that is built on a strong foundation of fairness and respect. We strive to be leaders in our field and ensure growth for our clients and employees.',
          responsibilities: [
            'Shape the product strategy and vision and deliver solutions.',
            'Provide thought leadership for the domains and products that you own.',
            'Create compelling market validated use cases & lead ideation.',
            'Interact with enterprise stakeholders, end-users and prospects to co-innovate and test the requirements.',
            'Own and drive the execution of product\'s roadmap to take the product to market.',
            'Manage multiple products/features simultaneously.',
            'Champion for your products both externally and internally.',
            'Provide thought leadership for the domains and products that you own.',
            'Team orientation and willingness to roll up sleeves to solve complex, dynamic challenges.',
            'Strong relationships building skills; experience managing stakeholders and partners to drive cross functional programs.',
            'Ability to communicate clearly and effectively with different functional groups, developers, business owners, and senior business leaders.',
            'Ability to collaborate with and effectively influence remote teams in multiple time zones.'
          ],
          qualifications: [],
          skills: [
            '5+ years of product management or consulting experience in technology focused business.',
            'Atleast 2 years in software industry with leadership and customer-facing roles.',
            'BE /B. Tech in computer science.',
            'MBA from a reputed Business School.',
            'Familiarity with Cloud technologies such as AWS, Azure or GCP.',
            'Should have worked on data migration, data pipelines and DataOps projects.',
            'Familiarity with data processing and storage technologies (distributed log management,Streamsets, data ingestion, API management, object, block, file storage technologies).',
            'Familiarity with data warehousing technologies and modeling (ETL pipelines, cloud data,Warehouses, Snowflake/RedShift/Big Query, access patterns and event data models, etc.).'
          ],
          profile: [
            'Great analytical skill is a must.',
            'Solid presentation skills.',
            'Knowledge of software design and development.',
            'Familiarity with Agile and scrum Methodologies.',
            'Excellent verbal written communication skills.'
          ]
        },
        {
          title: 'Hadoop Admin',
          type: 'Full Time',
          exp: '3 - 10+ years',
          location: 'Hyderabad',
          postedOn: 'August 24, 2020',
          description: 'We are seeking some experienced personnel who under minimal direction performs as a fully experienced Hadoop/Cloudera System Administrator. The candidate will manage the live Hadoop infrastructure for the organization, Including production infrastructure. The Candidate will use Hadoop familiarity to support the development team in the development of big data analytics. The Hadoop Engineer may also collaborate on system architecture and engineering efforts concerning the Hadoop infrastructure.',
          responsibilities: [
            'Hadoop administration including multiple products on Bigdata ecosystem.',
            'Hadoop Cluster configuration and securit.',
            'Capacity planning, performance tuning.',
            'Strong scripting background in automation, configuration management.',
            'HDFS maintenance and support.',
            'Onboarding users onto the platform.',
            'Supporting deployments of parcels and analytics.',
            'Heavily Process oriented and good communication skills',
            'Seeks to improve personal job-related knowledge and departmental process by studying state-of-the-art tools, participating in educational opportunities, and reading professional publications.'
          ],
          qualifications: [],
          skills: [
            'Ability to support large scale Production Hadoop environments in any of the Hadoop distributions.',
            'Proficiency in Designing, Capacity planning and cluster setup for Hadoop.',
            'Hadoop operational expertise such as troubleshooting skills, bottlenecks, Management of data, users, and job execution, basics of memory, CPU, OS, storage, and network.',
            'Experience in any of the Scripting Language (Perl, Shell, Python).',
            'Product knowledge on Hadoop distributions such as Cloudera, Hortonwork or MapR.',
            'Administration, maintenance, control, and optimization of Hadoop capacity, security, configuration, process scheduling, and errors.',
            'Development or administration on any NoSQL technologies.',
            'Development/scripting experience on Configuration management and provisioning tools e.g. Puppet, Chef.',
            'Development, Implementation or deployment experience on the Hadoop ecosystem (HDFS, MapReduce, Hive, Hbase).',
            'Analysis and optimization of workloads, performance monitoring and tuning, and automation.',
            'Addressing challenges of query execution across a distributed database platform on modern.',
            'Proficiency with at least one of the following: Java, Python or Perl.',
            'Experience in tool Integration, automation, configuration management in GIT, Jira platforms.',
            'Excellent oral and written communication, presentation skills, analytical and problem-solving skills.',
            'Self-driven, ability to work independently and as part of a team.'
          ],
          profile: []
        },
        {
          title: 'Sr Data Engineer',
          type: 'Full Time',
          exp: '4+ years',
          location: 'Hyderabad',
          postedOn: 'May 19, 2020',
          description: 'We are looking for a savvy Senior Data Engineer to join our growing team. We work with fortune 500 companies to build their data infrastructure and help them with their data journey. The Data Engineer will be responsible for expanding and optimizing our data and data pipeline architecture, as well as optimizing the data flow. The Senior Data Engineer will help generate data pipelines and subsequently with DataOps. He/ She must be self-directed and comfortable supporting the data needs of multiple teams, systems and products.',
          responsibilities: [],
          qualifications: [
            '4+ years of experience in building data pipelines.',
            'Experience building data pipelines using StreamSets or Azure Data Factory.',
            'Understanding of stream processing with knowledge on Kafka.',
            'Experience with scripting languages i.e. Python, Perl, etc.',
            'Experience with SQL (RDBMS), NoSQL (MongoDB), and PostgreSQL.',
            'Understanding of data flows, data architecture, ETL and processing of structured and unstructured data.',
            'Current experience developing and deploying applications to a public cloud (AWS, GCE).',
            'Experience with DevOps tools (GitHub, Jira) and methodologies (Lean, Agile, Scrum).',
            'Experience with ETL, Data Modeling, and working with large-scale datasets. Extremely proficient in writing performant SQL working with large data volumes.',
            'Ability to manage competing priorities simultaneously and drive projects to completion.'
          ],
          skills: [],
          profile: [
            'Experience on Azure DevOps is a plus.',
            'Bachelor\'s degree or higher in a quantitative/technical field (e.g. Computer Science, Engineering).',
            'Excellent written and verbal communication skills in English.',
            'Experience in working in agile (SCRUM) methodology.'
          ]
        },
        {
          title: 'Scrum Master',
          type: 'Full Time',
          exp: '4 - 10+ years',
          location: 'Hyderabad',
          postedOn: 'August 24, 2020',
          description: 'We are looking for a Scrum Master who will work with our Data Engineering team. The development shall be carried out with cutting-edge technologies and “best software development practices,” such as Agile/Scrum/Scaled Agile framework. In achieving that, he / she needs to implement strong agile software development practices, and ensure the team follows it.',
          responsibilities: [],
          qualifications: [
            'Scrum Master certification preferable (CSM / CSPO).',
            'SAFe certification is preferred.',
            'Overall understanding of the Software Development Lifecycle (SDLC).',
            'Experience with an iterative agile methodology and use of tools like JIRA, Wiki, Git, and Jenkins.',
            'Experience working in Data Engineering, Data Analytics and DataOps would be given preference.',
            'Should have 2+ years of experience as a scrum master.',
            'Ability to identify early blockers for progression of the sprints, early planning for mitigating it and reporting the same to stakeholders to keep them honest, and thereby protecting the integrity of the sprint.',
            'Ability to understand the technical requirements and designs that team is working on is required.',
            'Knowledge and experience in using modern agile management tools, such as Azure DevOps and Confluence, is highly desired.',
            'Should have exposure working with Multicultural clients.',
            'Excellent leadership skills and servant leader mentality.',
            'Minimum 2 to 10 years of IT experience.',
            'Experience managing a geo-dispersed project team.',
            'Organize and facilitate planning, daily stand-up, reviews, retrospectives and demos and other meetings.',
            'Well versed with the fundamentals of DevOps and CI/CD.',
            'Clear communication and status reporting to the management.'
          ],
          skills: [],
          profile: [
            'BS/MS degree in a relevant technical discipline, such as Computer Science Engineering or Information Technology.',
            'Strong communication skills and ability to work independently and in a team environment.'
          ]
        },
        {
          title: 'Delivery Manager',
          type: 'Full Time',
          exp: '10 - 12+ years',
          location: 'Hyderabad',
          postedOn: 'July 1, 2020',
          description: 'We are looking for a delivery manager who will be responsible for the operations and delivery of the project. The team comprises of highly technical members who strive for delivering the best. As a part of this team, you will be working on various technologies and facing stakeholders.',
          responsibilities: [
            '12+ years of total experience in IT Services and in Delivery.',
            'Strong experience in Delivery with distributed teams, onsite/offshore, define and implement delivery processes, handle mix of project types and technologies.',
            'Cloud Operations experience with Azure, GCP, Amazon Web Services, and Google Cloud.',
            'Extensive experience architecting & designing solutions on Big Data including data ingestion, Data Lake, Hadoop, Spark, Kafka, predictive analytics, advanced visualization & dashboards.',
            'Experience in integrating data from multiple sources, data flow design, building ETL pipelines for data warehouse or big data.',
            'Ability to run Data Governance, DQ management, Data Modelling & establishing Data Lineage between disparate enterprise data stores will be beneficial.',
            'Solid understanding of metadata management best practices with experience implementing or operating a metadata repository.',
            'Should have worked on cloud, on Prem & hybrid solutions in Big data.',
            'Ability to manage and coach a Big Data Agile team through design, development, testing, implementation, and support.',
            'Good knowledge on coding standards, design patterns, unit testing frameworks, TDD, CICD practices with tools/technologies like GitHub, Maven, Jenkins, Docker, etc.',
            'Demonstrated ability to work in a very fast paced environment, to manage multiple tasks, to adapt and deliver results in highly unstructured situations.',
            'Ability to build high performing teams, mentoring team members, building a strong second line, ability to attract & retain talent.',
            'Excellent customer interfacing skills and proven ability to interact with senior leadership team from IT and Business in the customer organization.',
            'Proficient in articulation, communication and presentation.',
            'Experience of working in Agile teams.'
          ],
          qualifications: [],
          skills: [],
          profile: [
            'Btech/ BE in Computer Science.',
            'Minimum 12 years of relevant development life cycle experience.',
            'Strong project management and team management skills.'
          ]
        },
        {
          title: 'Scala Developer',
          type: 'Full Time',
          exp: '2+ years',
          location: 'Hyderabad',
          postedOn: 'June 25, 2020',
          description: 'If you are looking to work with exciting talent in Data Engineering & Big data Technologies like - Hadoop, SOLR, Spark, Hive, Airflow, Elastic Search, Docker, Kubernetes, Scala, Python, and Functional Programming? Then Modak is the right place for an exciting career opportunity as Scala Developer.',
          responsibilities: [],
          qualifications: [
            '2 to 4 years hands on experience (coding) in developing solutions on Hadoop, HDFS and Spark.',
            'Experience working with Kafka and Cassandra will be an added advantage.',
            'Deep understanding of distributed systems (e.g. partitioning, replication, consistency).',
            'Expertise with object-oriented programming,preferably Scala.',
            'Experience working with Apache Spark API, Apache Spark SQL DataFrame API.',
            'Expertise in SQL and hands on experience of at least one RDBMS - MySQL, NoSQL, PostgreSQL.',
            'Understanding working in Linux/Unix environment.',
            'Exposure to Docker and container-based development.'
          ],
          skills: [
            'Bachelor\'s Degree in Computer Science, Computer Engineering, or equivalent experience/knowledge desired.',
            'Strong knowledge in Java/J2EE.',
            'Good knowledge of multithreaded programing.',
            'Strong communication skills.',
            'Ability to lead teams, mentor developers.',
            'Understanding of Spring, Spring Boot and Core Java technologies.',
            'Play framework, Experience in working with Apache Spark.',
            'Experience in working with NoSQL db.',
            'Experience with modern development patterns like micro services and server less.',
            'Experience on SCRUM Agile methodology, Devops.'
          ],
          profile: []
        }
      ]
    }    
  },
  methods: {
    activeJob () {
      return this.jobs[this.jobIndex]
    }
  }
};
</script>

<style lang="scss" scoped>
</style>