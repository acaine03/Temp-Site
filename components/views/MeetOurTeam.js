const katelynnhs=require('../../img/katelynn.jpg')
const mareaynahs=require('../../img/mareayna.jpg')
const jenniferhs=require('../../img/jennifer.jpg')

export default () => `
    <div class="right-side-content">

        <div class="meet-our-team">
            
            <div class="mareayna" style="padding: 3em">
            <img src="${mareaynahs}" class="mareayna-headshot"><figcaption>Mareayna (Marina)<br>MA-CMHC, PLPC, NCC<br>Trauma & EMDR Specialist</figcaption>
            </div>
            
            <div class="katelynn" style="padding: 3em">
            <img src="${katelynnhs}" class="katelynn-headshot"><figcaption>Katelynn (Kate-Lynn)</figcaption>
            </div>

            <div class="jennifer" style="padding: 3em">
            <img src="${jenniferhs}" class="jennifer-headshot"><figcaption>Jennifer (Jennifer)</figcaption>
            </div>

        </div>

    </div>
`;