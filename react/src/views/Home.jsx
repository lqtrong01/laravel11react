import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import PageComponent from '../components/PageComponent'
import { useEffect, useState } from "react"
import axiosClient  from '../axios'

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  return (
    <>
      <PageComponent title="">
        {/* {loading && <div className="flex justify-center">Loading...</div>} */}
        
      </PageComponent>
    </>
  )
}
