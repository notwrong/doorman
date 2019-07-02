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
          <v-card id="myCard" flat class="text-xs-center my-2 pa-2">
            <!-- making the avatar responsive, the avatar itself, and it's img source -->
            <v-responsive class="pt-4">
              <v-avatar size="130">
                <img :src="member.img" alt="avatar of member">
              </v-avatar>
            </v-responsive>
            <!-- team member name -->
            <v-card-text id="name">{{member.name}}</v-card-text>
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

export default {
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
#myCard {
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