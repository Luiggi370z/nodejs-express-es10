const handler = promise => async (req, res, next) => {
  try {
    const result = await promise({ ...req.params, ...req.body })
    res.json(result || { ok: true })
  } catch (err) {
    res.status(500).json({
      ok: false,
      err
    })
  }
}

export default handler
