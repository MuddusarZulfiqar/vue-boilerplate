<script>
export default {
    name: 'ErrorBoundary',
    data() {
        return {
            error: null,
        };
    },
    errorCaptured(err, vm, info) {
        console.error('Captured Error:', err, info);
        this.error = err;
        // return false;
    },
    render() {
        if (this.error) {
            return this.$slots.fallback?.() || 'Something went wrong.';
        }
        return this.$slots.default?.();
    },
};
</script>
