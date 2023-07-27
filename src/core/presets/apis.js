/**
 * @prettier
 */
import BasePreset from "./base"
import JSONSchema202012Plugin from "../plugins/json-schema-2020-12"

export default function PresetApis() {
  return [BasePreset,  JSONSchema202012Plugin]
}
