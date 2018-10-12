import { Sentry, SentrySeverity } from 'react-native-sentry'

/**
 * Log message to sentry
 * @param string message
 * @param object data
 * @param string level
 */
export function Log(message, data, level) {
  if (!level) level = SentrySeverity.Warning
  if (typeof data !== 'object') data = {}
  if (Object.keys(data).length) {
    message += ' -> ' + JSON.stringify(data)
  }
  Sentry.captureMessage(message, {
    level: SentrySeverity.Warning,
    extra: {}
  })
}
