<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Home</h1>
      </v-col>
      <v-col class="pa-4 text-center secondary rounded-0">
        <v-menu
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              v-on="on"
            >
              <v-avatar size="24">
                <v-icon>
                  mdi-account
                </v-icon>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>정보</v-card-title>
            <v-card-actions>
              <v-btn
                :to="myProfile"
                color=""
                dark
                block
              >
                내 프로필
              </v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn
                color=""
                dark
                block
                @click="signOut"
              >
                로그아웃
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { signOut } from '@/plugins/firebase/auth';
import { removeToken } from '@/plugins/token';
import '@/store/index';

export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    myProfile: '/userProfile',
  }),
  created() {
  },
  methods: {
    signOut() {
      signOut()
        .then(() => {
          removeToken('__session').then(() => {
            this.$router.go(0);
          });
          this.$toasted.show('로그아웃 완료');
        })
        .catch((error) => {
          this.$toasted.show(error.message);
        })
        .finally(() => {
        });
    },
  },
};
</script>
