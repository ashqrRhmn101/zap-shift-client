import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    // watch,
    control,
    formState: { errors },
  } = useForm();

  // Get regions data & sort && convert arr
  const serverCenters = useLoaderData();
  const regionsDuplicate = serverCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });
  // console.log(regions);

  //  Districts By Regions
  const districtsByRegions = (regions) => {
    const regionDistricts = serverCenters.filter((c) => c.region === regions);
    // console.log(regionDistricts)
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  // Handle Send Parcel
  const handleSendParcel = (data) => {
    console.log(data);

    Swal.fire({
      title: "Agree with the cost?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Take it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Excellent",
          text: "Your file has been success.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="bg-white m-12 rounded-2xl p-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-[#03373D]">Send A Parcel</h1>
      <p className="text-xl font-medium text-[#03373D] mt-1">
        Enter your parcel details
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-10">
        {/* ------------------ PARCEL TYPE ------------------ */}
        <div className="flex items-center gap-10 border-b pb-4">
          <label className="flex items-center gap-2 cursor-pointer text-lg">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio radio-success"
              defaultChecked
            />
            Document
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-lg">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio radio-success"
            />
            Not Document
          </label>
        </div>

        {/* ------------------ PARCEL DETAILS ------------------ */}
        <div className="grid md:grid-cols-2 gap-8 mt-10 w-[95%]">
          {/* Parcel Name */}
          <div>
            <label className="font-semibold text-[#03373D]">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName", { required: true })}
              placeholder="Parcel Name"
              className="input input-bordered w-full rounded-xl mt-1"
            />
            {errors.parcelName && (
              <p className="text-red-500 text-sm">Required</p>
            )}
          </div>

          {/* Parcel Weight */}
          <div>
            <label className="font-semibold text-[#03373D]">
              Parcel Weight (KG)
            </label>
            <input
              type="text"
              {...register("parcelWeight", { required: true })}
              placeholder="Parcel Weight (KG)"
              className="input input-bordered w-full rounded-xl mt-1"
            />
            {errors.weight && <p className="text-red-500 text-sm">Required</p>}
          </div>

          {/* Parcel Price */}
          <div>
            <label className="font-semibold text-[#03373D]">
              Parcel Price (TK)
            </label>
            <input
              type="number"
              // {...register("price", { required: true })}
              placeholder="Total Price"
              className="input input-bordered w-full rounded-xl mt-1"
            />
            {errors.price && <p className="text-red-500 text-sm">Required</p>}
          </div>

          {/* Parcel Quantity */}
          <div>
            <label className="font-semibold text-[#03373D]">Quantity</label>
            <input
              type="number"
              {...register("parcelQuantity", { required: true })}
              placeholder="Quantity"
              className="input input-bordered w-full rounded-xl mt-1"
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm">Required</p>
            )}
          </div>

          {/* Parcel Category */}
          <div>
            <label className="font-semibold text-[#03373D]">Category</label>
            <select
              {...register("parcelCategory", { required: true })}
              className="select select-bordered w-full rounded-xl mt-1"
            >
              <option value="">Select Category</option>
              <option>Fragile</option>
              <option>Liquid</option>
              <option>Electronics</option>
              <option>Other</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">Required</p>
            )}
          </div>

          {/* Parcel Image */}
          <div>
            <label className="font-semibold text-[#03373D]">Parcel Image</label>
            <input
              type="file"
              {...register("parcelImage")}
              className="file-input file-input-bordered w-full rounded-xl mt-1"
            />
          </div>
        </div>

        {/* ------------------ SENDER DETAILS ------------------ */}
        <h2 className="text-2xl font-bold mt-14 mb-3 text-[#03373D]">
          Sender Details
        </h2>
        <div className="grid md:grid-cols-2 gap-8 w-[95%]">
          <div>
            <label className="font-semibold text-[#03373D]">Sender Name</label>
            <input
              type="text"
              {...register("senderName", { required: true })}
              placeholder="Sender Name"
              className="input input-bordered w-full rounded-xl mt-1"
            />
          </div>

          <div>
            <label className="font-semibold text-[#03373D]">Sender Phone</label>
            <input
              type="text"
              {...register("senderPhone", { required: true })}
              placeholder="Phone Number"
              className="input input-bordered w-full rounded-xl mt-1"
            />
          </div>

          {/* email */}
          <div className="flex flex-col md:col-span-2">
            <label className="label font-semibold text-[#03373D]">Email</label>
            <input
              type="email"
              {...register("senderEmail", { required: true })}
              className="input input-bordered w-full rounded-xl mt-1"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}
          </div>

          {/* Selector Send region*/}
          <fieldset className="flex flex-col">
            <label className="font-semibold text-[#03373D]">
              Sender Regions
            </label>
            <select
              {...register("senderRegion")}
              defaultValue="Pick a region"
              className="select input input-bordered w-full rounded-xl mt-1"
            >
              <option disabled={true}>Pick a region</option>
              {regions.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </fieldset>

          {/* Selector Send Districts*/}
          <fieldset className="flex flex-col">
            <label className="font-semibold text-[#03373D]">
              Sender Districts
            </label>
            <select
              {...register("senderDistrict")}
              defaultValue="Pick a Districts"
              className="select input input-bordered w-full rounded-xl mt-1"
            >
              <option disabled={true}>Pick a Districts</option>
              {districtsByRegions(senderRegion).map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </fieldset>
        </div>

        {/* ------------------ RECEIVER DETAILS ------------------ */}
        <h2 className="text-2xl font-bold mt-14 mb-3 text-[#03373D]">
          Receiver Details
        </h2>
        <div className="grid md:grid-cols-2 gap-8 w-[95%]">
          <div>
            <label className="font-semibold text-[#03373D]">
              Receiver Name
            </label>
            <input
              type="text"
              {...register("receiverName", { required: true })}
              placeholder="Receiver Name"
              className="input input-bordered w-full rounded-xl mt-1"
            />
          </div>

          <div>
            <label className="font-semibold text-[#03373D]">
              Receiver Phone
            </label>
            <input
              type="text"
              {...register("receiverPhone", { required: true })}
              placeholder="Phone Number"
              className="input input-bordered w-full rounded-xl mt-1"
            />
          </div>

          {/* email */}
          <div className="flex flex-col md:col-span-2">
            <label className="label font-semibold text-[#03373D]">Email</label>
            <input
              type="email"
              {...register("receiverMail", { required: true })}
              className="input input-bordered w-full rounded-xl mt-1"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}
          </div>

          {/* Selector Receiver region*/}
          <fieldset className="flex flex-col">
            <label className="font-semibold text-[#03373D]">
              Receiver Regions
            </label>
            <select
              {...register("receiverRegion")}
              defaultValue="Pick a region"
              className="select input input-bordered w-full rounded-xl mt-1"
            >
              <option disabled={true}>Pick a region</option>
              {regions.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </fieldset>

          {/* Selector Receiver Districts*/}
          <fieldset className="flex flex-col">
            <label className="font-semibold text-[#03373D]">
              Receiver Districts
            </label>
            <select
              {...register("receiverDistrict")}
              defaultValue="Pick a Districts"
              className="select input input-bordered w-full rounded-xl mt-1"
            >
              <option disabled={true}>Pick a Districts</option>
              {districtsByRegions(receiverRegion).map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </fieldset>
        </div>

        {/* ------------------ NOTES ------------------ */}
        <h2 className="text-2xl font-bold mt-14 mb-3 text-[#03373D]">
          Delivery Notes
        </h2>
        <textarea
          {...register("notes")}
          placeholder="Any instructions for delivery"
          className="textarea textarea-bordered w-[95%] rounded-xl"
          rows={4}
        ></textarea>

        {/* SUBMIT BUTTON */}
        <button className="btn bg-[#C8EE65] border-none text-black px-10 mt-10">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
