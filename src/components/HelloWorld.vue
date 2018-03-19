<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <h1>7904 Verde Springs Dr</h1>
        <b-list-group>
          <b-list-group-item><b>Air Conditioning: </b> {{proprity['air_conditioning']}}</b-list-group-item>
          <b-list-group-item><b>Construction Type: </b> {{proprity['construction_type']}}</b-list-group-item>
          <b-list-group-item><b>Garage Parking of Cars: </b> {{proprity['garage_parking_of_cars']}}</b-list-group-item>
          <b-list-group-item><b>Garage Type Parking: </b> {{proprity['garage_type_parking']}}</b-list-group-item>
          <b-list-group-item><b>Heating: </b> {{proprity['heating']}}</b-list-group-item>
          <b-list-group-item><b>Number of Bedrooms: </b> {{proprity['number_of_bedrooms']}}</b-list-group-item>
          <b-list-group-item><b>Number of Units: </b> {{proprity['number_of_units']}}</b-list-group-item>
          <b-list-group-item><b>Property Type: </b> {{proprity['property_type']}}</b-list-group-item>
          <b-list-group-item><b>Year Built: </b> {{proprity['year_built']}}</b-list-group-item>
          <b-list-group-item><b>Assessment Year: </b> {{assessment['assessment_year']}}</b-list-group-item>
          <b-list-group-item><b>Tax Year: </b> {{assessment['tax_year']}}</b-list-group-item>
          <b-list-group-item><b>Total Assessed Value: </b> ${{assessment['total_assessed_value']}}</b-list-group-item>
          <b-list-group-item><b>Tax Amount: </b> ${{assessment['tax_amount']}}</b-list-group-item>
        </b-list-group>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import HouseCanary from '@/services/HouseCanaryService'
export default {
  name: 'defalut',
  data () {
    return {
      proprity: [],
      assessment: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await HouseCanary.fetchPosts()
      this.proprity = response.data[0]['property/details']['result']['property']
      this.assessment = response.data[0]['property/details']['result']['assessment']
    }
  }
}
</script>