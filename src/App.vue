<template>
  <div id="app">

    <HeaderComponent/>
      <router-view to="/" />
    <FooterComponent/>

  </div>
</template>

<script>
 import './styles/global.css';

  import HeaderComponent from './components/HeaderComponent'
  import FooterComponent from './components/FooterComponent'

export default {
 name: 'App',
 components: {
   HeaderComponent,
   FooterComponent
 }
}
</script>


