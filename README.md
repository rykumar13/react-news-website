<h1 align="center">
  <a href="https://daily-roundup.netlify.app/" target="_blank">daily-roundup.netlify.app
</a>
</h1>
<p align="center">
  The first iteration of <a href="https://daily-roundup.netlify.app/" target="_blank">react-news-site.app</a> built with <a href="https://pypi.org/project/beautifulsoup4/" target="_blank">beautifulsoup4</a> and hosted with <a href="https://www.netlify.com/" target="_blank">Netlify</a> and AWS EC2, RDS & API Gateway.
</p>
<br>
<div align="center">
  <img alt="Logo" src="https://github.com/rykumar13/react-news-website/blob/master/dailyRoundUp.gif" />
</div>
<br>
<h2> How the website works</h2>
<p align="center">
  <ul>
  <li>A python script cron job runs every 15 mins that scrapes data from Stuff, RadioNZ & Scoop news websites. This is hosted on a AWS EC2 instance.</li>
  <li>This data is then inserted into a MySQL instance hosted on AWS RDS.</li>
  <li>There is Flask API setup using AWS API Gateway to expose this data to the client. This API supports HTTPS, Basic Auth & is CORS compliant.</li>
  <li>Finally there is the client built using React & Styled components.</li>
  </ul>
  <br>
  <h2> Architecture Diagram</h2>
  <p align="center">
  <img alt="diagram" src="https://raw.githubusercontent.com/rykumar13/react-news-website/4f574629a632a87e3cc2d86c6d9c21c73ccb330b/diagrams/diagram.svg" />
    <p>
</p>
<br>
<h2>
Technologies used
  </h2>
  <p> 
    <ul>
     <li>React</li>
     <li>AWS RDS</li>
      <li>AWS EC2</li>
      <li>AWS API Gateway</li>
      <li>Netlify</li>
      <li>Javascript ES6</li>
      <li>beautifulsoup4 library</li>
    </ul>
  </p>
<br>
<h2>
🎨 Colour Reference
</h2>

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Red            | ![#EC4438](https://via.placeholder.com/10/EC4438?text=+) `#EC4438`|
| Grey           | ![#A2A2A2](https://via.placeholder.com/10/A2A2A2?text=+) `#A2A2A2`|
| Gold           | ![#FFB900](https://via.placeholder.com/10/FFB900?text=+) `#FFB900` |


