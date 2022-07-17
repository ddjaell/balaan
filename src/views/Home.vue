<template>
  <div>
    <PersonalInfo></PersonalInfo>
  </div>
</template>

<script>
// @ is an alias to /src
import PersonalInfo from '@/components/member/register/PersonalInfo'

export default {
  name: 'Home',
  components: {
    PersonalInfo
  }
}
</script>
