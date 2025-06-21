import { styles } from "@/main/assets/ts/styles"
import { coactiva_config } from "@/main/configs/config"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

interface Props {
    containerVariants : any,
    itemVariants : any
}

export const InfoCards = ({ containerVariants, itemVariants } : Props) => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center group cursor-pointer hover:text-white transition-colors">
            <div className={`p-2 ${styles.primary[600]} rounded-lg mr-3 group-hover:bg-green-500 transition-colors`}>
                <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
                <p className="font-semibold">Consulta inmediata</p>
                <p className="text-sm text-white/70">+57 {coactiva_config.cellphones.one} </p>
            </div>
            </div>
            
            <div className="flex items-center group cursor-pointer hover:text-white transition-colors">
            <div className="p-2 bg-white rounded-lg mr-3 group-hover:bg-slate-100 transition-colors">
                <Mail className="w-5 h-5 text-green-700" />
            </div>
            <div className="text-left">
                <p className="font-semibold"> {coactiva_config.emails.one} </p>
                <p className="text-sm text-white/70">Asesoría personalizada</p>
            </div>
            </div>
            
            <div className="flex items-center group cursor-pointer hover:text-white transition-colors">
            <div className="p-2 bg-slate-700 rounded-lg mr-3 group-hover:bg-slate-600 transition-colors">
                <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
                <p className="font-semibold">Medellín, Colombia</p>
                <p className="text-sm text-white/70">Circular 76 #39B-135</p>
            </div>
            </div>
        </motion.div>
    </motion.div>
  )
}

