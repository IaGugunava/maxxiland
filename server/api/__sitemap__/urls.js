export default defineEventHandler(async () => {
  const baseUrl = process.env.NUXT_PUBLIC_BASE_URL

  try {
    const servicesRes = await $fetch(`${baseUrl}api/services?pagination[pageSize]=100`)
    const salesRes = await $fetch(`${baseUrl}api/shops?pagination[pageSize]=100`)

    if (!servicesRes?.data?.length && !salesRes?.data?.length) {
      return {
        error: 'Empty response from Strapi',
        servicesRes,
        salesRes
      }
    }

    const serviceRoutes = servicesRes.data.map((item) => {
      const slug = item?.slug
      const id = item.id
      return `/services/${id}-${slug?.toLowerCase().replace(/\s+/g, '-')}`
    })

    const salesRoutes = salesRes.data.map((item) => {
      const slug = item?.slug
      const id = item.id
      return `/sales/${id}-${slug?.toLowerCase().replace(/\s+/g, '-')}`
    })

    const staticRoutes = ['/', '/about-us', '/contact', '/services', '/sales']

    return [...staticRoutes, ...serviceRoutes, ...salesRoutes]

  } catch (err) {
    return {
      error: 'Failed to fetch',
      message: err.message
    }
  }
})
