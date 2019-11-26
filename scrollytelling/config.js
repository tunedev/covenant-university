var config = {
  style: "mapbox://styles/tunechi/ck1j5c0d71ew01cq97olwf5nr", //TODO
  accessToken:
    "pk.eyJ1IjoidHVuZWNoaSIsImEiOiJjazFqMHcxM3oxMXNjM2RwNmhndmprOWc0In0.myc82ybuUmuLt8afz6qX4g", //TODO
  title: "My Lacation based story", //TODO
  subtitle:
    "My little life's journey, here is a representation of my travel experiences", //TODO
  byline: "Sanusi Babatunde", //TODO
  footer: "Created at Concatenate Lagos 2019",
  showMarkers: true,
  theme: "light",
  alignment: "left",
  chapters: [
    //TODO replace this data with data from the first point in your dataset
    {
      id: "secondary-school",
      title: "My Secondary School",
      description:
        "A school with lots of exposure to a whole different world, quite different from the world i came from. active was in the boarding shool for quite some time before going over to my grand aunts place to get shit differrently, expecially in my grades",
      location: {
        center: [3.373667679090204, 6.51754155103832],
        zoom: 12,
        pitch: 0,
        bearing: -0
      }
    },
    {
      id: "post-secondary-school",
      title: "My Post Secondary School",
      description:
        "This was the opposite of secondary school as i belive it sucked out all the fun secondary school deposited in me. The only thing they have in common is the fact that they are both federal schools and that their recipt for official payments are alike. my days in this school was triangular church, minimum class, alone in the house. I was really scared of cultism and there were stories of how this school is a pretty big base for cultist in the past, and you know that gave a really fearful scare in the do things part of my mind. The term living carefully is the summary of my days in Ilaro, both in social and academic life.",
      location: {
        center: [2.982865371363772, 6.893942135542417],
        zoom: 12,
        pitch: 0,
        bearing: -0
      }
    },
    {
      id: "former-work-place",
      title: "Former work place",
      description:
        "This used to be where i call workplace, till a thanos snap on the business meant 400 software engineer's, both in-training and off-training, role would be maide redundant. This evolved thoughts regarding Job security",
      location: {
        center: [3.3661601055905237, 6.553418452688732],
        zoom: 12,
        pitch: 0,
        bearing: -0
      }
    },
    {
      id: "home-town",
      title: "The area i Originate from",
      description:
        "This is the only place i wont be confident in a bus as a navigator to without the help of mapbox. As i learnt from my parent, this area is where i originate from, it is a part of the largest city in west africa, which is also home to the first and arguably the best university in Nigeria",
      location: {
        center: [3.8976486683789346, 7.381412699519785],
        zoom: 12,
        pitch: 0,
        bearing: -0
      }
    },
    {
      id: "home",
      title: "My home at the moment",
      description:
        "Here is where i call home located, my family and beloved lives here with me. At the moment it is also going to be my work place",
      location: {
        center: [3.3245879115652315, 6.5190776630746825],
        zoom: 12,
        pitch: 0,
        bearing: -0
      }
    }
    //TODO Copy-paste more chapters here - one for each point in your dataset!
  ]
};
