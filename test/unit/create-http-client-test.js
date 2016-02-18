import test from 'tape'
import sinon from 'sinon'

import createHttpClient from '../../lib/create-http-client'

test('Calls axios with expected URL', t => {
  const axios = {
    create: sinon.stub()
  }

  createHttpClient(axios, {
    accessToken: 'clientAccessToken',
    space: 'clientSpaceId'
  })

  t.equals(axios.create.args[0][0].baseURL, 'https://cdn.contentful.com:443/spaces/clientSpaceId/')
  t.end()
})
