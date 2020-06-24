<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b-container fluid="sm">
      <b-row class="justify-content-center">
        <b-col cols="12">
          <div>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
              <div>
                <b-container fluid="sm">
                  <b-row class="justify-content-center">
                    <b-col cols="6" sm="12">
                      <div style="background-color: green"><p>Test</p></div>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
