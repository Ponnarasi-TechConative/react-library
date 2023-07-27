/**
 * @prettier
 */
import BasePreset from "./base"
import OAS3Plugin from "../plugins/oas3"
import JSONSchema202012Plugin from "../plugins/json-schema-2020-12"

export default function PresetApis() {
  return [BasePreset, OAS3Plugin, JSONSchema202012Plugin]
}
