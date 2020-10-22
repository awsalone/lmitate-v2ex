import $axios from './$axios'

export const getNodes = (name) => $axios('/nodes/show.json', { params: name })
export const getNodesItem = (name) => $axios('/topics/show.json', { params: name })
export const getReply = (id) => $axios('/replies/show.json', { params: id })

export const getTopicItem = (id) => $axios('/topics/show.json', { params: id })
