<template>
  <div class="tdee">
    <h2>Tdee component</h2>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <div class="tdee-container">
            <h2>Track How Many Calories Your Body Burns</h2>

            <h3>Gender</h3>
            <div class="gender">
              <input v-model="picked" type="radio" id="male" name="gender" value="male" />
              <label for="male">Male</label>
              <input v-model="picked" type="radio" id="female" name="gender" value="female" />
              <label for="female">Female</label>
            </div>

            <h3>Age</h3>
            <div>
              <input v-model="age" type="number" />
            </div>

            <h3>Weight</h3>
            <div>
              <input v-model="weight" type="number" />
            </div>

            <h3>Height</h3>
            <div>
              <!-- TODO: Split feet and inches into two different inputs? -->
              <select v-model="height" name="height" id="height">
                <option value="48">4ft 0in</option>
                <option value="49">4ft 1in</option>
                <option value="50">4ft 2in</option>
                <option value="51">4ft 3in</option>
                <option value="52">4ft 4in</option>
                <option value="53">4ft 5in</option>
                <option value="54">4ft 6in</option>
                <option value="55">4ft 7in</option>
                <option value="56">4ft 8in</option>
                <option value="57">4ft 9in</option>
                <option value="58">4ft 10in</option>
                <option value="59">4ft 11in</option>
                <option value="60">5ft 0in</option>
                <option value="61">5ft 1in</option>
                <option value="62">5ft 2in</option>
                <option value="63">5ft 3in</option>
                <option value="64">5ft 4in</option>
                <option value="65">5ft 5in</option>
                <option value="66">5ft 6in</option>
                <option value="67">5ft 7in</option>
                <option value="68">5ft 8in</option>
                <option value="69">5ft 9in</option>
                <option value="70">5ft 10in</option>
                <option value="71">5ft 11in</option>
                <option value="72">6ft 0in</option>
                <option value="73">6ft 1in</option>
                <option value="74">6ft 2in</option>
                <option value="75">6ft 3in</option>
                <option value="76">6ft 4in</option>
                <option value="77">6ft 5in</option>
                <option value="78">6ft 6in</option>
                <option value="79">6ft 7in</option>
                <option value="80">6ft 8in</option>
                <option value="81">6ft 9in</option>
                <option value="82">6ft 10in</option>
                <option value="83">6ft 11in</option>
                <option value="84">7ft 0in</option>
              </select>
            </div>

            <h3>Activity Level</h3>
            <div>
              <select v-model="activity" name="activity" id="activity">
                <option value="sedentary">Sedentary</option>
                <option value="light">Light Activity</option>
                <option value="active">Active</option>
                <option value="athlete">Athlete</option>
              </select>
            </div>

            <!-- <button v-on="picked == 'male' ? {click: calcBmrMale} : {click:calcBmrFemale}">Calculate</button> -->
            <button @click="calcTdee">Calculate</button>
            <p>Your TDEE is: {{ tdee }}</p>
            <!-- TODO: Hide this and only show when Calcualte button is clicked -->
            <p>We recommend consuming {{ tdee - 500 }} calories per day to lose weight.</p>
            <p>We recommend consuming {{ tdee + 500 }} calories per day to gain weight.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: null,
      age: 0,
      weight: 0,
      height: 0,
      bmrMale: "",
      bmrFemale: "",
      tdee: "",
      activity: ""
    };
  },
  methods: {
    calcBmrMale: function() {
      // BMR = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
      this.bmrMale = Math.round(
        66 +
          6.2 * parseInt(this.weight) +
          12.7 * parseInt(this.height) -
          6.76 * parseInt(this.age)
      );
    },
    calcBmrFemale: function() {
      // BMR = 655.1 + ( 4.35 × weight in pounds ) + ( 4.7 × height in inches ) - ( 4.7 × age in years )
      this.bmrFemale = Math.round(
        655.1 +
          4.35 * parseInt(this.weight) +
          4.7 * parseInt(this.height) -
          4.7 * parseInt(this.age)
      );
    },
    // BMR x 1.53
    calcSedAndLightTdee: function() {
      if (this.picked == "male") {
        this.calcBmrMale();
        this.tdee = parseInt(this.bmrMale * 1.53);
      } else {
        this.calcBmrFemale();
        this.tdee = parseInt(this.bmrFemale * 1.53);
      }
    },
    // BMR x 1.76
    calcActiveTdee: function() {
      if (this.picked == "male") {
        this.calcBmrMale();
        this.tdee = parseInt(this.bmrMale * 1.76);
      } else {
        this.calcBmrFemale();
        this.tdee = parseInt(this.bmrFemale * 1.76);
      }
    },
    // BMR x 2.25
    calcAthleteTdee: function() {
      if (this.picked == "male") {
        this.calcBmrMale();
        this.tdee = parseInt(this.bmrMale * 2.25);
      } else {
        this.calcBmrFemale();
        this.tdee = parseInt(this.bmrFemale * 2.25);
      }
    },
    calcTdee: function() {
      if (this.activity == "sedentary" || this.activity == "light") {
        this.calcSedAndLightTdee();
      } else if (this.activity == "active") {
        this.calcActiveTdee();
      } else if (this.activity == "athlete") {
        this.calcAthleteTdee();
      }
    }
  }
};
</script>

<style>
.tdee-container {
  background: #fff;
  padding: 1.4rem;
  border-radius: 5px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}
</style>
