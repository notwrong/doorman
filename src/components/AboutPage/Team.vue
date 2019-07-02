<template>
  <v-container app>
    <!-- the background card for all the team members -->
    <v-card depressed class="pa-3 my-2 grey darken-4">
      <h1>Meet The Team</h1>

      <h3 class="font-weight-light">
        We're a team of full stack developers that have attended Lambda School. Most of us have been Team Leads, Project Managers,
        or Section Leads and got really tired of having to constantly accept student and co-worker github invites for repos when working
        on projects. So we decided to get together and build an app that can automate that problem away.
      </h3>
      <!-- the layout for the grid of the team members -->
      <div ref="test" class="test">
        <v-layout row wrap justify-space-around>
          <!-- this wraps the team member card -->
          <v-flex
            justify-center
            xs8
            md3
            height="400px"
            class="my-4 secondary"
            v-for="member in teamMembers"
            :key="member.name"
            id="myWrapper"
          >
            <!-- the individual team member card -->
            <v-card ref="TeamMemberCard" id="myCard" flat class="text-xs-center my-2 pa-2">
              <!-- making the avatar responsive, the avatar itself, and it's img source -->
              <v-responsive class="pt-4">
                <div ref="pic">
                  <v-avatar size="140">
                    <img :src="member.img" alt="avatar of member" />
                  </v-avatar>
                </div>
              </v-responsive>
              <!-- team member name -->
              <v-card-text id="name">{{member.name}}</v-card-text>
              <h1 ref="egg" id="egg">SURPRISE</h1>
              <!-- team member position -->
              <v-card-text class="font-weight-light">{{ member.position }}</v-card-text>
              <!-- Links to team members porfolio, github, and linkedIn accounts -->
              <v-card-actions>
                <!-- github -->

                <v-btn flat>
                  <a :href="member.github" target="_blank">Github</a>
                </v-btn>
                <!-- linkedIn -->
                <v-btn flat>
                  <a :href="member.linkedIn" target="_blank">LinkedIn</a>
                </v-btn>
                <!-- portfolio -->
                <v-btn flat>
                  <a :href="member.portfolio" target="_blank">Portfolio</a>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import Gannon from "../../assets/Gannon.png";
import Nick from "../../assets/Nick.png";
import Adam from "../../assets/Adam.png";
import AJ from "../../assets/AJ.png";
import Ryan from "../../assets/ryan.png";
import Tom from "../../assets/Tom.png";

import { TimelineLite, TweenMax, Back } from "gsap";

export default {
  mounted() {
    const { test, pic, egg } = this.$refs;
    const timeline = new TimelineLite();

    timeline.to(test, 1, {
      x: 0,
      y: 50,
      ease: Back.ease
    });
    timeline.to(test, 1, {
      x: 0,
      y: 0,
      opacity: 1,
      ease: Back.ease
    });
    timeline.to(
      pic,
      1,
      {
        rotation: 360
      },
      15
    );
    timeline.to(egg, 1, {
      opacity: 1,
      ease: Back.ease
    });
    timeline.to(egg, 1, {
      opacity: 0,
      ease: Back.ease
    });
  },
  data() {
    return {
      teamMembers: [
        {
          name: "Gannon Darcy",
          img: Gannon,
          github: "https://github.com/GannonDetroit",
          linkedIn: "https://www.linkedin.com/in/gannon-darcy-b8345073/",
          portfolio: "https://www.gannon.dev/",
          position: "Full Stack Developer"
        },
        {
          name: "AJ Brush",
          img: AJ,
          github: "https://github.com/ajb85",
          linkedIn: "https://www.linkedin.com/in/andrew-brush-58205b122/",
          portfolio: "https://ajbrush.com/",
          position: "Full Stack Developer"
        },
        {
          name: "Ryan Boris",
          img: Ryan,
          github: "https://github.com/ryanboris",
          linkedIn: "https://www.linkedin.com/in/ryanboris",
          portfolio: "https://github.com/ryanboris",
          position: "Full Stack Developer"
        },
        {
          name: "Nick Cannariato",
          img: Nick,
          github: "https://github.com/ajb85",
          linkedIn: "https://www.linkedin.com/in/nickcannariato/",
          portfolio: "https://github.com/nickcannariato",
          position: "Full Stack Developer"
        },
        {
          name: "Adam McKenney",
          img: Adam,
          github: "https://github.com/DaftBeowulf",
          linkedIn: "https://www.linkedin.com/in/adam-mckenney-04827a35/",
          portfolio: "https://adammckenney.dev/",
          position: "Full Stack Developer"
        },
        {
          name: "Thomas Hessburg",
          img: Tom,
          github: "https://github.com/TomHessburg",
          linkedIn: "https://www.linkedin.com/in/thomas-hessburg-596948180/",
          portfolio: "https://thomashessburg.com/",
          position: "Full Stack Developer"
        }
      ]
    };
  }
};
</script>

<style scoped>
.test {
  opacity: 0;
}

#egg {
  font-size: 16px;
  color: gold;
  opacity: 0;
  margin: -4%;
}

#myWrapper {
  margin: 2%;
}

#name {
  font-size: 25px;
}
h1 {
  text-align: center;
  font-size: 40px;
}
h3 {
  text-align: center;
  padding: 1% 5%;
}

a {
  text-decoration: none;
}

.v-card__actions {
  display: grid;
}

.v-card__text {
  font-size: 16px;
}
</style>