<template>
  <div class="container">
    <h2>Table</h2><br>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<style scoped>
  table, td, tr, th{
    background: white;
  }
  table {

    border-radius: 15px;
}
th {
 background: linear-gradient(184deg, rgba(181,183,184,1) 0%, rgba(36,37,38,0.7959558823529411) 46%, rgba(0,212,255,0.4654236694677871) 100%) !important;
}
</style>
<script>
  export default {
    data() {
      return {
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: [
          {
            key: 'nama',
            sortable: true,
            thClass: 'bg-dark text-white'
          },
          {
            key: 'NRM',
            sortable: true,
            thClass: 'bg-dark text-white'
          },
          {
            key: 'poli',
            label: 'Poli',
            sortable: true,
            thClass: 'bg-dark text-white'
          }
        ],
        items: [
          { isActive: true, nama: 'Sobri', NRM: '123', poli: 'Bedah umum' },
          { isActive: true, nama: 'Sobrun', NRM: '456', poli: 'Bedah umum' },
        ]
      }
    }
  }
</script>