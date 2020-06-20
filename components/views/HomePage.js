const homePage=require('../../img/home.jpg')
const meetOurTeamPage=require('../../img/team.jpg')
const clientServicesPage=require('../../img/services.jpg')
const resourcesPage=require('../../img/resources.jpg')
const careerOpportunitiesPage=require('../../img/career.jpg')
const contactUs=require('../../img/contact.jpg')

export default () => `
    <div class="right-side-content">
    <div class="home-greeting">
    <h3>Hello, Admin.</h3>
    
    </div>  
    
        <div class="home-nav">
          <a href="/HomePage"><img src="${homePage}" class="home"><figcaption>Home</figcaption></a>
          <a href="/MeetOurTeam"><img src="${meetOurTeamPage}" class="team"><figcaption>Meet Our Team</figcaption></a>
          <a href="/ClientServices"><img src="${clientServicesPage}" class="clientServices"><figcaption>Client Services</figcaption></a>
          <a href="/Resources"><img src="${resourcesPage}" class="resources"><figcaption>Resources</figcaption></a>
          <a href="/CareerOpportunities"><img src="${careerOpportunitiesPage}" class="careerOpportunities"><figcaption>Career Opportunities</figcaption></a>
          <a href="/ContactUs"><img src="${contactUs}" class="contactUs"><figcaption>Contact Us</figcaption></a>
        </div>
    </div>
`;