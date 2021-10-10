<script>
export default {
  middleware({ redirect }) {
    return redirect('301', '/admin/users/page/1');
  },
};
</script>
