import hostname from './hostname'
import ip from './ip'
import memory from './memory'
import cpu from './cpu'
import network from './network'
import battery from './battery'
import spotify from './spotify'

const plugins =  [hostname, ip, memory, battery, cpu, network,];
if (process.platform !== 'win32') {
  plugins.push(spotify);
}
export default plugins
