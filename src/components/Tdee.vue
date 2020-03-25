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
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">Male</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female">Female</label>
            </div>

            <h3>Age</h3>
            <div>
              <input type="number" />
            </div>

            <h3>Weight</h3>
            <div>
              <input v-model="weight" type="number" />
            </div>

            <h3>Height</h3>
            <div>
              <!-- TODO: Split feet and inches into two different inputs -->
              <select name="height" id="height">
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
              <select name="activity" id="activity">
                <option value="sedentary">Sedentary</option>
                <option value="light">Light Activity</option>
                <option value="active">Active</option>
                <option value="athlete">Athlete</option>
              </select>
            </div>

            <button @click="calcBmrMale">Calculate</button>
            <p>{{ weight }}</p>
            <p>{{ bmrMale }}</p>
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
      weight: 0,
      height: 0,
      bmrMale: 0
    };
  },
  methods: {
    calcBmrMale: function() {
      this.bmrMale =
        66 + 6.2 * parseInt(this.weight) + 12.7 * parseInt(this.height);
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
