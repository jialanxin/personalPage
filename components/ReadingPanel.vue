<template>
             <v-expansion-panel>
            <v-expansion-panel-header>
              <v-row>
                <v-col>
                  <v-row>
                    <v-col class="pa-0">
                      <p class="font-weight-black title ma-0"><slot name="chinese_title"></slot></p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pa-0">
                      <p
                        class="caption ma-0"
                      ><slot name="english_title"></slot></p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="auto">
                  <p class="font-weight-light">
                      <slot name="author"></slot>
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              
              <slot name="content"></slot>
            </v-expansion-panel-content>
          </v-expansion-panel>
</template>