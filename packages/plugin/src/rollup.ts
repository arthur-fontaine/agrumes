import { createRollupPlugin } from 'unplugin'
import { unpluginFactory } from './unplugin'

// eslint-disable-next-line import/no-default-export
export default createRollupPlugin(unpluginFactory)
