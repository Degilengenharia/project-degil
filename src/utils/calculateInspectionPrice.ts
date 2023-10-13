import { config } from '../../config.local'
import { DataProps } from '@/app/vistorias/page'

const initialM2 = config.INITIAL_M2
const initialPrice = config.INITIAL_PRICE
const surplusM2 = config.SURPLUS_M2
const semiFurnished = config.SEMI_FURNISHED
const furnished = config.FURNISHED
const courtyard = config.COUTYARD

export const calculateInspectionPrice = (data: DataProps) => {
    const { propertyArea, hasFurniture, hasCourtyard } = data

    const furniture = hasFurniture === 'semiFurnished' ? semiFurnished : hasFurniture === 'furnished' ? furnished : 0
    const totalArea = Number(propertyArea) < initialM2 ? initialM2 : Number(propertyArea)
    const valueCourtyard = hasCourtyard === 'yes' ? courtyard : 0

    const inspectionPrice = (initialPrice + ((totalArea - initialM2) * surplusM2)) * (1 + furniture + valueCourtyard)

    return inspectionPrice
}