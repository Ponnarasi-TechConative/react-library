/**
 * @prettier
 */
import BasePreset from "./base"
import OAS31Plugin from "../plugins/oas31"

export default function PresetApis() {
  return [BasePreset,  OAS31Plugin]
}
