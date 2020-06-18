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
          <a href="/Home"><img src="${homePage}" class="home"><figcaption>Home</figcaption></a>
          <a><img src="${meetOurTeamPage}" class="team"><figcaption>Meet Our Team</figcaption></a>
          <a><img src="${clientServicesPage}" class="banking"><figcaption>Banking</figcaption></a>
          <a><img src="${resourcesPage}" class="resources"><figcaption>Resources</figcaption></a>
          <a><img src="${careerOpportunitiesPage}" class="careerOpportunities"><figcaption>Career Opportunities</figcaption></a>
          <a><img src="${contactUs}" class="contactUs"><figcaption>Contact Us</figcaption></a>
        </div>
    </div>
`;